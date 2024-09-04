const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the public directory
app.use(express.static(path.resolve("./public")));

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message); // Broadcast the message to all connected clients
  });
});

// Serve the chat application HTML
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

// Start the server on port 9000
server.listen(9000, () => console.log(`Server started at PORT: 9000`));
