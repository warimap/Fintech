import { RequestHandler } from "express";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import { z } from "zod";
import { 
  WaitlistRequest, 
  WaitlistResponse, 
  WaitlistSubmission, 
  WaitlistEntriesResponse 
} from "@shared/api";

// Validation schema for waitlist submissions
const WaitlistSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Valid email is required").max(100),
  location: z.enum(["london", "mogadishu", "mombasa", "minneapolis", "dubai", "other"], {
    errorMap: () => ({ message: "Please select a valid location" })
  })
});

// Path to store waitlist data (in production, use a proper database)
const WAITLIST_FILE = join(process.cwd(), 'data', 'waitlist.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    require('fs').mkdirSync(dataDir, { recursive: true });
  }
}

// Helper function to read waitlist data
function readWaitlistData(): WaitlistSubmission[] {
  ensureDataDirectory();
  
  if (!existsSync(WAITLIST_FILE)) {
    return [];
  }
  
  try {
    const data = readFileSync(WAITLIST_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading waitlist data:', error);
    return [];
  }
}

// Helper function to write waitlist data
function writeWaitlistData(data: WaitlistSubmission[]) {
  ensureDataDirectory();
  
  try {
    writeFileSync(WAITLIST_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing waitlist data:', error);
    throw new Error('Failed to save waitlist data');
  }
}

// Helper function to check if email already exists
function emailExists(email: string, existingEntries: WaitlistSubmission[]): boolean {
  return existingEntries.some(entry => 
    entry.email.toLowerCase() === email.toLowerCase()
  );
}

/**
 * Handle waitlist submission
 * POST /api/waitlist
 */
export const handleWaitlistSubmission: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const validationResult = WaitlistSubmissionSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      const response: WaitlistResponse = {
        success: false,
        message: validationResult.error.errors[0].message
      };
      return res.status(400).json(response);
    }

    const submissionData = validationResult.data as WaitlistRequest;
    
    // Read existing waitlist data
    const existingEntries = readWaitlistData();
    
    // Check if email already exists
    if (emailExists(submissionData.email, existingEntries)) {
      const response: WaitlistResponse = {
        success: false,
        message: "This email is already on our waitlist. Thank you for your interest!"
      };
      return res.status(409).json(response);
    }
    
    // Create new waitlist entry
    const newEntry: WaitlistSubmission = {
      ...submissionData,
      id: randomUUID(),
      timestamp: new Date().toISOString()
    };
    
    // Add to existing entries
    existingEntries.push(newEntry);
    
    // Save updated data
    writeWaitlistData(existingEntries);
    
    // Log for monitoring (in production, use proper logging)
    console.log(`New waitlist submission: ${newEntry.email} from ${newEntry.location}`);
    
    const response: WaitlistResponse = {
      success: true,
      message: "Thank you for joining our waitlist! We'll be in touch soon.",
      id: newEntry.id
    };
    
    res.status(201).json(response);
    
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    
    const response: WaitlistResponse = {
      success: false,
      message: "Sorry, something went wrong. Please try again later."
    };
    
    res.status(500).json(response);
  }
};

/**
 * Get all waitlist entries (admin only)
 * GET /api/waitlist
 */
export const handleGetWaitlistEntries: RequestHandler = async (req, res) => {
  try {
    // In production, add proper authentication/authorization here
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized" 
      });
    }
    
    const entries = readWaitlistData();
    
    // Sort by timestamp (newest first)
    entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    const response: WaitlistEntriesResponse = {
      success: true,
      entries,
      total: entries.length
    };
    
    res.json(response);
    
  } catch (error) {
    console.error('Error retrieving waitlist entries:', error);
    
    const response: WaitlistEntriesResponse = {
      success: false,
      entries: [],
      total: 0
    };
    
    res.status(500).json(response);
  }
};

/**
 * Get waitlist statistics
 * GET /api/waitlist/stats
 */
export const handleWaitlistStats: RequestHandler = async (req, res) => {
  try {
    const entries = readWaitlistData();
    
    // Calculate statistics
    const locationStats = entries.reduce((acc, entry) => {
      acc[entry.location] = (acc[entry.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const recentEntries = entries.filter(entry => {
      const entryDate = new Date(entry.timestamp);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return entryDate > weekAgo;
    }).length;
    
    const stats = {
      total: entries.length,
      recentWeek: recentEntries,
      byLocation: locationStats,
      lastSubmission: entries.length > 0 ? 
        entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0].timestamp 
        : null
    };
    
    res.json({
      success: true,
      stats
    });
    
  } catch (error) {
    console.error('Error getting waitlist stats:', error);
    res.status(500).json({
      success: false,
      message: "Error retrieving statistics"
    });
  }
};

/**
 * Export waitlist data as CSV (admin only)
 * GET /api/waitlist/export
 */
export const handleWaitlistExport: RequestHandler = async (req, res) => {
  try {
    // Check API key
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized" 
      });
    }
    
    const entries = readWaitlistData();
    
    // Create CSV content
    const csvHeader = "ID,First Name,Last Name,Email,Location,Timestamp\n";
    const csvRows = entries.map(entry => 
      `${entry.id},"${entry.firstName}","${entry.lastName}","${entry.email}","${entry.location}","${entry.timestamp}"`
    ).join('\n');
    
    const csv = csvHeader + csvRows;
    
    // Set headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="nani-waitlist-${new Date().toISOString().split('T')[0]}.csv"`);
    
    res.send(csv);
    
  } catch (error) {
    console.error('Error exporting waitlist:', error);
    res.status(500).json({
      success: false,
      message: "Error exporting data"
    });
  }
};
