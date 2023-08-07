const os = require("os"); //inbuild package
const fs = require("fs");
fs.write("names.txt", data, (err) => {
  console.log("completed writing!");
});
fs.readfile("./names.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("completed writing!");
  }
});

console.log("hellowwww!");
console.log("processors", os.cpus());
