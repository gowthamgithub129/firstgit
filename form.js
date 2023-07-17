const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Send the HTML form to the client
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <form method="POST" action="/submit" enctype="multipart/form-data">
        <input type="text" name="username" placeholder="Username" /><br />
        <input type="file" name="avatar" /><br />
        <button type="submit">Submit</button>
      </form>
    `);
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Handle the form submission
    const writeStream = fs.createWriteStream('output.txt');

    req.pipe(writeStream)
      .on('finish', () => {
        // Redirect with a 302 response
        res.writeHead(302, { Location: '/success' });
        res.end();
      });
  } else if (req.url === '/success') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Form submitted successfully!');
  } else {
    // Return a 404 response for unknown routes
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
