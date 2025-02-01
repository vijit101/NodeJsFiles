const fs = require("fs");

fs.writeFileSync("data.txt","New Emp",(err)=>{
    if(err){
        console.log(err);
    }
})


fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
        
    }
    
})

// async op might delete before file created 
fs.unlink("data.txt",(err)=>{
    if(err){
        console.log(err);
    }
});



console.log("another Operation");