// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"


    },

    {
        type: "input",
        name: "description",
        message: "Provide a description of your project?"


    },

    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"

    },

    {
        type: "input",
        name: "usage",
        message: "What are instructions for using this project?"

    },

    {
        type: "input",
        name: "contributors",
        message: "Who helped contribute to this project?"

    },

    {
        type: "list",
        name: "license",
        choices: ["None", "Apache", "MIT", "Eclipse"]

    },

    {

        type: "input",
        name: "github",
        message: "What is your Github user name?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"

    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        let newReadME = generateMarkdown(data)
        fs.writeFile("README.md", newReadME, (err) =>
            err ? console.error(err) : console.log('Your README has been created!'));
    })
}

// Function call to initialize app
init();