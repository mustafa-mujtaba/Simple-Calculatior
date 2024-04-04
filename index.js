#! /usr/bin/env node
import inquirer from "inquirer";
// printing a Welcome Message
console.log("\n\tWelcome To \'Muhammad Mehdi Raza\' - Cli Simple Calculatior\n");
// Asking question from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operatior to perform operations",
        type: "list",
        name: "operatior",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// Conditional Statement If-Else
if (answers.operatior === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operatior === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operatior === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operatior === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
