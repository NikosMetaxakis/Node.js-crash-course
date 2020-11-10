const fs = require("fs");
const path = require("path");

//Create and write to file
fs.writeFile(
    path.join(__dirname, "/test", "path+fs.txt"), "basename:" + path.basename(__filename), 
    err => {
        if (err) throw err;
        console.log("File written");

        //File append
        fs.appendFile(
            path.join(__dirname, "/test", "path+fs.txt"), "\ndirname: " + path.dirname(__filename), 
            (err) => {
                if (err) throw err;
                console.log("File appended");
        }); 

        fs.appendFile(
            path.join(__dirname, "/test", "path+fs.txt"), "\nextname: " + path.extname(__filename), 
            (err) => {
                if (err) throw err;
                console.log("File appended");
        });
        
        fs.appendFile(
            path.join(__dirname, "/test", "path+fs.txt"), "\nparse: " + path.parse(__filename), 
            (err) => {
                if (err) throw err;
                console.log("File appended");
        });

        fs.appendFile(
            path.join(__dirname, "/test", "path+fs.txt"), "\njoin: " + path.join(__dirname, "test", "path+fs.html"), 
            (err) => {
                if (err) throw err;
                console.log("File appended");
        });
});
