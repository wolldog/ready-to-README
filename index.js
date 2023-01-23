// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
        validate: function (title) {
            if (title) {
                return true
            } else {
                console.log('Please enter a title for your project')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'In a sentence or two, describe the what, why and how of your project.',
        validate: function (description) {
            if (description) {
                return true
            } else {
                console.log('Please enter a description of your project')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe steps to install your application. If none, press Enter.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your application. If none, press Enter.',
        default: 'N/A'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license that applies to your project',
        choices: ['None', 'Apache 2', 'GNU GPL 3', 'MIT'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if applicable. If none, press Enter.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests to determine your application is working as expected. If none, press Enter.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (required).',
        validate: function (email) {
            if (email) {
                return true
            } else {
                console.log('Please enter a valid email address.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (required).',
        validate: function (github) {
            if (github) {
                return true
            } else {
                console.log('Please enter a valid email address.')
                return false
            }
        }
    }
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log('Success!')

  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=> {
        const readMeContent = generateMarkdown (response)
        writeToFile('./results/README.md', readMeContent)

    });

}


// Function call to initialize app
init();
