const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Welcome to application \n");// appends to the response
    //console.log(req.url);
    if(req.url == "/prod"){
        res.end("This is product page");
    }else{
        res.end("This is a page");
    }
    
});

server.listen(8080,()=>{

    console.log("server Listening to port 8080");
});

module.exports = {server};
