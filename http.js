const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world server is running");
    res.end();
  }else if (req.url === '/services') {
    res.write("this is service collections")
    res.end()
  }else{
    res.write('not found')
  }
});

server.listen(PORT);
console.log(`hello world server running port is ${PORT}`);
