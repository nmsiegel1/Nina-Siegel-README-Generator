// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./src/page-template.js");
// const Choices = require("inquirer/lib/objects/choices");

// // TODO: Create an array of questions for user input
// const questions = [

// ];

// // TODO: Create a function to write README file
// function writeFile(fileName, data) {}

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
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: "input",
            name: "install",
            message: "What type of command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: "What type of command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "tips",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contributions",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "input",
            name: "credits",
            message: "Who contributed to this project?"
        }
    ]).then(answers => {
        const pageMarkdown = generateMarkdown(answers)
    
        fs.writeFile("./dist/README.md", pageMarkdown, err => {
            if (err) throw err;
            console.log("README complete! Check out README.md to see the output!");
        });
    });
}

// Function call to initialize app
init()


