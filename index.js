const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //console.log(req.url); //shows the current url
    /* if(req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), 
        (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        });    
    }
    if(req.url === "/api/users") {
        const users = [
            { name: "bob", age: 40 },
            { name: "Jonhy", age: 33 }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } */

    //Build file path
    let filePath = path.join(__dirname, "public", 
        req.url === "/" ? "index.html" : req.url
    );

    //Extension of file
    let extname = path.extname(filePath);

    //Initial content type
    let conteType = "text/html";    //could be the default of the switch below ..

    //Check extension and set content type
    switch(extname) {
        case ".js":
            conteType = "text/javascript";
            break;
        case ".css":
            conteType = "text/css";
            break;
        case ".json":
            conteType = "application/json";
            break;
        case ".png":
            conteType = "image/png";
            break;
        case ".jpg":
            conteType = "image/jpg";
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == "ENOENT") {
                //Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), 
                    (err, content) => {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                    })
            } else {
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } 
        } else {
            //Success
            res.writeHead(200, { "Content-Type": conteType });
            res.end(content, "utf8");
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(
    `Server running on port: ${PORT}`));