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
function writeToFile(fileName, data) {  
  return new Promise ((resolve, reject) => {
  fs.writeFile('./dist/index.html', fileContent, err => {
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
    .then ((userAnswers) => {
      writeToFile('${userAnswers.name}.md', generateMarkdown({...userAnswers}));
})
}

// Function call to initialize app
init();

// github username, email address, project name, short description, license list and can choose none, to install dependencies, command to run test, know about using the repo, need to know about contributing 