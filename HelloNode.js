// console.log("Hello World!");
// const fs = require("fs");
// fs.writeFileSync("ReadMe.txt", "Welcome from Node !");
// const product = (a, b) => a * b;
// console.log(product(4, 2));

const printData = (val, time) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log(val)), time);
  });
  promise.then((a) => a);
  return promise;
};

const print = () => {
  console.log("a");
  console.log("b");
  printData("c", 3000)
    .then((a) => a)
    .then(() => printData("d", 0))
    .then(() => console.log("e"));
};
print();
