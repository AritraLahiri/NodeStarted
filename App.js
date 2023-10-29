const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.setHeader("content-type", "text/html");
    res.write("Welcome Home");
    res.end();
  } else if (req.url === "/about") {
    res.setHeader("content-type", "text/html");
    res.write("Welcome to About Us");
    res.end();
  } else if (req.url === "/node") {
    res.setHeader("content-type", "text/html");
    res.write("Welcome to my NodeJs Project");
    res.end();
  }
});

server.listen(4000);
