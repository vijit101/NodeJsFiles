const readline = require("readline");

const cmdInterface =  readline.createInterface({input : process.stdin,output:process.stdout});

cmdInterface.question("Enter number 1 ",(num1)=>{
    cmdInterface.question("enter num 2 ",(num2)=>{
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    })
});
cmdInterface.close();

