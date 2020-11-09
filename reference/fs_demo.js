const fs = require("fs");
const path = require("path");

//Create fodler
/* fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
    if (err) throw err;
    console.log("Folder created");
}); */

//Create and write to file
/* fs.writeFile(
    path.join(__dirname, "/test", "hello.txt"), "hello world!", 
    err => {
        if (err) throw err;
        console.log("File written");

        //File append
        fs.appendFile(
            path.join(__dirname, "/test", "hello.txt"), ", hello Node.js", 
            (err) => {
                if (err) throw err;
                console.log("File appended");
        }); 
}); */

//Read file
/* fs.readFile(
    path.join(__dirname, "/test", "hello.txt"), "utf8", 
    (err, data) => {
        if (err) throw err;
        console.log("Data contained: ", data);
}); */

//Rename file
fs.rename(
    path.join(__dirname, "/test", "hello.txt"), 
    path.join(__dirname, "/test", "helloworld.txt"), 
    err => {
        if (err) throw err;
        console.log("File renamed");
});