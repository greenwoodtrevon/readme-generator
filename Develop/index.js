// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the name of your project?", "Describe your project.", "What is the live link to your project?", "What steps are required to install your project? Separate steps with commas.", "Who were the collaborators for your project? Separate with commas."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log('There was an error.');
    } else {
      generateMardown(data);
    };
    
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0]
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1]
      },
      {
        type: 'input',
        name: 'link',
        message: questions[2]
      },
      {
        type: 'input',
        name: 'steps',
        message: questions[3]
      },
      {
        type: 'input',
        name: 'collabs',
        message: questions[4]
      },
    ])
    .then(answers => {
      let theTitle = answers.title;
      let theDescription = answers.description;
      let theLink = answers.link;
      let theSteps = answers.steps.split(",");
      let theCollabs = answers.collabs.split(",");
      console.log(theTitle, theCollabs[1]); 
    });
    (answers => writeToFile('readme.md', answers));
    
  };

// Function call to initialize app
init();
