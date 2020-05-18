/* Update your weekly challenge from last week to use a switch statement. If you can't find a place to put a switch statement in your challenge, use my example challenge here:
 https://github.com/LukeParkerTAFE/ServiceNSWLesson5/blob/master/ConsoleLoopDemo.js
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Welcome message
    console.log("Welcome to Luke's Calulator!");
    let shoudlLoop = true
    while (shoudlLoop) {
        // List options
        console.log("[1] Add numbers");
        console.log("[2] Subtract numbers");
        console.log("[3] Multiply numbers");
        console.log("[4] Exit");
        // Ask user to enter an option
        let userInput = await askQuestion("Select an option from above: ");
        console.log();
        // Choose an option based on user input
        switch(userInput) {
            case "1":
                console.log("You have selected the Add numbers function");
                // Add numbers logic
                let sumInput1 = await askQuestion("Enter the first number: ");
                let sumInput1num1 = parseInt(sumInput1);
                let sumInput2 = await askQuestion("Enter the second number: ");
                let sumInput2num2 = parseInt(sumInput2);
                console.log(`${sumInput1num1} plus ${sumInput2num2} is ${sumInput1num1 + sumInput2num2}`);
                break;
            case "2":
                console.log("You have selected the Subtract numbers function");
                // Subtract numbers logic
                let subInput1 = await askQuestion("Enter the first number: ");
                let subInput1num1 = parseInt(subInput1);
                let subInput2 = await askQuestion("Enter the second number: ");
                let subInput2num2 = parseInt(subInput2);
                console.log(`The difference between ${subInput1num1} and ${subInput2num2} is ${subInput1num1 - subInput2num2}`);
                break;
            case "3":
                console.log("You have selected the Multiply numbers function");
                // Multiply numbers logic
                let timesInput1 = await askQuestion("Enter the first number: ");
                let timesInput1num1 = parseInt(timesInput1);
                let timesInput2 = await askQuestion("Enter the second number: ");
                let timesInput2num2 = parseInt(timesInput2);
                console.log(`The product of ${timesInput1num1} and ${timesInput2num2} is ${timesInput1num1 * timesInput2num2}`);
                break;
            case "4":
                // Goodbye message
                console.log("Thank you for using the calculator");
                shoudlLoop = false
                break;
            default:
                console.log("Error: please enter a number 1 - 4");
                break;
            // Error: couldn't read input
        }
        console.log();
    }
}

// alt + shift + f

Program().then(() => {
    process.exit(0);
});