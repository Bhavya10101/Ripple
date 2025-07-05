// backend/server.js
const express = require('express');    // Import the Express library
const app = express();              // Create an Express application
const port = process.env.PORT || 5000; // Define the port for the server to listen on.
                                    // It tries to use a port from environment variables first,
                                    // otherwise defaults to 5000.

const cors = require('cors');  

app.use(express.json()); // Middleware to parse incoming JSON requests (useful for APIs later)
app.use(cors());

// Define a "route": what happens when someone visits the base URL (e.g., http://localhost:5000/)
app.get('/', (req, res) => {
  res.send('Hello from the backend!'); // Send this text as the response
});

// Start the server and make it listen for incoming network requests on the specified port
app.listen(port, () => {
  // This function runs once the server successfully starts
  console.log(`Backend server running on port ${port}`);
  console.log(`Open your browser to: http://localhost:${port}/`);
});