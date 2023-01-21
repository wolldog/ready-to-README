// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'In a sentence or two, describe the what, why and how of your project.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Describe steps to install your application if applicable',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your application'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license that applies to your project',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if applicable.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests to determine your application is working as expected.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: ''
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username'
    }
    
];

inquirer.prompt(questions).then((response)=> {
    console.log(response);


});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
