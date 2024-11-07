// src/index.ts

import { Hono } from 'hono'; // Import Hono
import { Routes } from './routes'; // Import the router

// Initialize the Hono app
const app = new Hono().basePath('/api');

// Mount routes
app.route('/', Routes);

// Start the server with specified port using Bun.serve
const port = 3000; // You can change this port
Bun.serve({
    fetch: app.fetch, // The handler for requests
    port: port, // Specify the port here
});

// Log to console
console.log(`Server running on http://localhost:${port}`);