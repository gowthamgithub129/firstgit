const http = require('http');

const server = http.createServer((req, res) => {
  console.log('GOWTHAM'); // Log your name
  res.end(); // End the response
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
