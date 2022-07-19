// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projName",
        message: "Enter the name of the project: "
    },
    {
        type: "input",
        name: "projDescr",
        message: "Enter a brief description of the project:"
    },
    {
        type: "input",
        name: "install",
        message: "Enter instructions for installing the project:",
        default: "(git clone ... npm install)"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for using your product: "
    },
    {
        type: "input",
        name: "credit",
        message: "Enter credits for sources used on the project and other calobrators: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license the project will use: ",
        choices: ["MIT","GPLv2","Apache", "Unlicense"]
    },
    {
        type: "input",
        name: "tests",
        message: "Enter tests for the project, and how to run them: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter the recomended way for other to contribute: "
    },
    {
        type:"input",
        name: "gUserName",
        message: "Enter your Github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        err ? console.log("An error occured, file was not created.") : console.log("README file was successfully created!") //if statement checks if file was created
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
      writeToFile("test.md", genMarkdown(response));
    });
  }

// Function call to initialize app
init();
