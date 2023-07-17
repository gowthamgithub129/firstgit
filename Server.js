const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Your name');
  res.end('Your name'); // Sends the response back to the client
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
