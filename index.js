// Required packages: inquirer v8.2.4; fileSystem; locally exported function 'generateMarkdown'

const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
        //Require user to provide a title
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
        type: 'editor',
        name: 'description',
        message: 'In a sentence or two, describe the what, why and how of your project.',
        //Require user to provide a title
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
        //If user does not provide input, record N/A/
        default: 'N/A'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Describe how to use your application.',
        //If user does not provide input, record N/A/
        validate: function (usage) {
            if (usage) {
                return true
            } else {
                console.log('Please add information on how to use your project')
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license that applies to your project',
        choices: ['None', 'Apache_2', 'GNU_GPL_3', 'MIT'],
        //If user does not provide input, record 'None'/
        default: 'None',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if applicable. If none, press Enter.',
        //If user does not provide input, record N/A/
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests to determine your application is working as expected. If none, press Enter.',
        //If user does not provide input, record N/A/
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (required).',
        //Require user to provide an email address
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
        //Require user to provide a GitHub username.
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


// Function to create the README.md file or notify user of an error if unable to produce file.
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log('You have successfully created a README.md file! You will find it in the "results" folder')
  );
}

// Function to intialise each step of the application process;
// 1. Call inquirer.prompt to ask questions
// 2. Call 'generateMarkdown' in generateMarkdown.js to produce content from responses
// 3. Call writeToFile to create the README.md file
function init() {
    inquirer.prompt(questions).then((response)=> {
        const readMeContent = generateMarkdown (response)
        writeToFile('./results/README.md', readMeContent)

    });

}


// Call the initialise function
init();
