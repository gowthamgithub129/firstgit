const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    fs.readFile('messages.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        data = '';
      }

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
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const message = new URLSearchParams(body).get('message');

      fs.appendFile('messages.txt', `${message}\n`, 'utf8', err => {
        if (err) {
          console.error(err);
        }

        res.writeHead(302, { Location: '/' });
        res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = server;
