const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    const fileData =  fs.readFileSync("portfolio.html").toString();
    res.end(fileData);
});


server.listen(8080,()=>{
    console.log("server Listening to port 8080");
});