const readline = require("readline");

const Solution = () => {
  const cmdInterface =  readline.createInterface({input : process.stdin,output:process.stdout});
  cmdInterface.question("Enter the First Number: ",(num1)=>{
    cmdInterface.question("Enter the second Number: ",(num2)=>{
        const greater = Number(num1)>Number(num2)?Number(num1):Number(num2);
        console.log("The Maximum of two numbers is: "+greater);
        cmdInterface.close();
    })
});
};

Solution();
module.exports = Solution;
