const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Read existing messages from the file
    fs.readFile('messages.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        data = ''; // If an error occurs, set the data to an empty string
      }

      // Send the HTML form with existing messages to the client
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <h2>Existing Messages:</h2>
        <div>${data}</div>
        <hr />
        <form method="POST" action="/submit" enctype="multipart/form-data">
          <input type="text" name="message" placeholder="Enter a message" /><br />
          <button type="submit">Submit</button>
        </form>
      `);
    });
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Handle the form submission
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const message = body.split('=')[1];

      // Append the new message to the file
      fs.appendFile('messages.txt', `${message}\n`, 'utf8', err => {
        if (err) {
          console.error(err);
        }

        // Redirect with a 302 response
        res.writeHead(302, { Location: '/' });
        res.end();
      });
    });
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
