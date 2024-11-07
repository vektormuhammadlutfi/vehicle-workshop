import { Hono } from "hono";

import { Routes } from "./routes";

// Initialize the Hono app
const app = new Hono().basePath("/api");

// Mount routes
app.route("/", Routes);

// Start the server with specified port using Bun.serve
const port = process.env.PORT || 3000; // You can change this port

Bun.serve({
  fetch: app.fetch, // The handler for requests
  port: port, // Specify the port here
});

console.log(`Server running on http://localhost:${port}`);
