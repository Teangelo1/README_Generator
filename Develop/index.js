// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input

     inquirer.prompt (

        [

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


            }



        ]
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
