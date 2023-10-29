const { writeFileSync } = require("fs");
const http = require("http");
let val;
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
  } else if (req.url === "/add") {
    res.setHeader("content-type", "text/html");
    res.write(`<h1 id='data'>${val}</h1>`);
    res.write(
      "<form action='getData' method = 'POST' ><input type='text' name='message'> <button>Add</button></form>"
    );
    res.end();
  } else if (req.url === "/getData" && req.method === "POST") {
    const body = [];
    // console.log(body);
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString().split("=")[1];
      writeFileSync("dummy.txt", parsedData);
      val = parsedData;
    });
    res.statusCode = 302;
    res.setHeader("Location", "/add");
    res.end();
  }
});

server.listen(4000);
