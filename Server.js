const http = require('http');

const server = http.createServer((req, res) => {
  console.log('GOWTHAM');
  res.end('GOWTHAM'); // Sends the response back to the client
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
