// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = ["What is the name of your project?", "Describe your project.", "What is the live link to your project?", "What steps are required to install your project?", "Who were the collaborators for your project?"];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name'
      }
    ])
    .then(answers => console.log(answers));
};

// Function call to initialize app
init();
