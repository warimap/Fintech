/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Waitlist submission data
 */
export interface WaitlistSubmission {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  timestamp: string;
  id: string;
}

/**
 * Waitlist submission request payload
 */
export interface WaitlistRequest {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
}

/**
 * Waitlist submission response
 */
export interface WaitlistResponse {
  success: boolean;
  message: string;
  id?: string;
}

/**
 * Get waitlist entries response (for admin)
 */
export interface WaitlistEntriesResponse {
  success: boolean;
  entries: WaitlistSubmission[];
  total: number;
}
