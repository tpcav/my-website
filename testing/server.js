const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const displayName = process.argv[2] || 'World';
  res.end(`<h1>Hello, ${displayName}!</h1>`);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
