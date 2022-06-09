// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username? (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address? (Required)"
        },
        {
            type: "input",
            name: "project",
            message: "What is your project name? (Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project. (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please add a description of your project.');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "liscense",
            message: "What type of liscense should your project have?",
            choices: ["MIT"],
            default: "MIT"
        },
        {
            type: "list",
            name: "instal dependencies",
            message: "What type of command should be run to instal dependencies?",
            choices: ["npm i"],
            default: "npm i"
        },
        {
            type: "list",
            name: "tests",
            message: "What type of command should be run to run tests?",
            choices: ["npm test"],
            default: "npm choices"
        },
        {
            type: "input",
            name: "tips",
            message: "What does the user need to know about using the repo?."
        }
    ]).then(answers => console.log(answers))
}

// Function call to initialize app
init();

