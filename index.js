// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");


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
            type: "input",
            name: "install",
            message: "Provide instructions for any installations required: (Required)",
            validate: projectInstallInput => {
              if (projectInstallInput) {
                return true;
              } else {
                console.log("Please enter installation instructions!");
                return false;
              }
            }
        },
        {
          type: "input",
          name: "usage",
          message: "If any, provide any further information(commands, screenshots, explanations, etc.) for the project. ",
        },  
        {
            type: "list",
            name: "license",
            message: "If any, please select a license (Required)",
            choices: ["MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU LGPLv3", "GNU GPLv3", "GNU AGPLv3", "BSD Zero Clause License"]
        },  
        {
          type: "input",
          name: "email",
          message: "What is your email? (Required)",
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your email!");
              return false;
            }
          }
        },  
        {
          type: "input",
          name: "github",
          message: "What is your github username? (Required)",
          validate: githubUsernameInput => {
            if (githubUsernameInput) {
              return true;
            } else {
              console.log("Please enter your github username!");
              return false;
            }
          }
        }, 
        {
        type: "input",
        name: "contributions",
        message: "If any, provide instructions for others to be able to contribute to this project.",
      },  
      {
        type: "input",
        name: "test",
        message: "If any, provide instructions for running tests for this project.",
      }  
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  // console.log(fileName); 
  // console.log(data);
  return new Promise ((resolve, reject) => {
  fs.writeFile(path.join(process.cwd(),fileName), data, err => {
      if(err) {
          reject(err);
          return;
      }
      resolve({
          ok: true,
          message: "ReadMe created!"
      });
  });
});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((data) => {
      console.log(questions);
      console.log(data);
      writeToFile('README.md', generateMarkdown(data));
})
}

// Function call to initialize app
init();
