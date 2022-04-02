const express = require("express");
const app = express();
const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type:' : 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(3000);
app.get("/", (req, res) => {
    res.sendfile(__dirname + "/index.html");
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');