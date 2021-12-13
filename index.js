// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: projectNameInput => {
              if (projectNameInput) {
                return true;
              } else {
                console.log("Please enter your project's name!");
                return false;
              }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)",
            validate: projectDescriptionInput => {
              if (projectDescriptionInput) {
                return true;
              } else {
                console.log("Please enter a project description!");
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Are any installations required for this project?',
            default: true
          },
        {
            type: "input",
            name: "install",
            message: "Provide instructions for any installations required: (Required)",
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: projectInstallInput => {
              if (projectInstallInput) {
                return true;
              } else {
                console.log("Please enter installation instructions!");
                return false;
              }
            }
        }   
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
