const fs = require("fs");
const path = require("path");

//Create fodler
/* fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
    if (err) throw err;
    console.log("Folder created");
}); */

//Create and write to file
fs.writeFile(
    path.join(__dirname, "/test", "hello.txt"), "hello world", 
    (err) => {
        if (err) throw err;
        console.log("File written");
});


fs.writeFile(
    path.join(__dirname, "/test", "hello.txt"), "hello Node.js", 
    (err) => {
        if (err) throw err;
        console.log("File written");
}); 