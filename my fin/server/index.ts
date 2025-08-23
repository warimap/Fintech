import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleWaitlistSubmission,
  handleGetWaitlistEntries,
  handleWaitlistStats,
  handleWaitlistExport
} from "./routes/waitlist";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Waitlist API routes
  app.post("/api/waitlist", handleWaitlistSubmission);
  app.get("/api/waitlist", handleGetWaitlistEntries);
  app.get("/api/waitlist/stats", handleWaitlistStats);
  app.get("/api/waitlist/export", handleWaitlistExport);

  return app;
}
