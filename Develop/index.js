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




            },

            {
                type: "input",
                name: "Usage",
                message: "What are instructions for using this project?"

            },

            {
                type: "input",
                name: "collaborators:",
                message: "Who helped contribute to this project?"

            },

            {
                type: "checkbox",
                name: "license",
                choices: ["None", "Apache", "MIT", "Eclipse"]

            }




        ]
    )
    .then (data => {
        console.log(data);
        let newReadME = generateMarkdown(data)
        fs.writeFile("README.md", newReadME, (err) =>
        err ? console.error(err) : console.log('Your README has been created!'));
    })


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();