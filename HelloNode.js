console.log("Hello World!");
const fs = require("fs");
fs.writeFileSync("ReadMe.txt", "Welcome from Node !");
const product = (a,b) => a*b;
console.log(product(4,2)); 