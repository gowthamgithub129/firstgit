// server.js
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from the "public" folder (containing login.html and index.html).

// Handle login route
app.post("/login", (req, res) => {
  const { username } = req.body;
  // Validate the username if needed.
  // Store the username in local storage on the client-side.
  res.redirect("/");
});

// Handle message submission route
app.post("/send", (req, res) => {
  const { username, message } = req.body;
  // Store the message in a file or a database along with the username.
  // You can use a database like MongoDB or a file system like fs to store messages.
  storeMessage(username, message);
  res.sendStatus(200);
});

function storeMessage(username, message) {
  // Your code to store the message in a file or database goes here.
  // For simplicity, we'll use fs to append the message to a file.
  const data = `${username}: ${message}\n`;
  fs.appendFile("messages.txt", data, (err) => {
    if (err) {
      console.error("Error storing message:", err);
    }
  });
}

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
