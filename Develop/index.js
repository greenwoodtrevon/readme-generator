// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is the name of your project?", "Describe your project.", "What is the live link to your project?", "What steps are required to install your project? Separate steps with commas.", "How can I use this?", "Who were the collaborators for your project? Separate with commas.", "What is your GitHub username? This will be for questions from users."];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFile(fileName, data, (error) => {
//     if (error) {
//       console.log('There was an error.');
//     } else {
//       generateMarkdown(data);
//     };
    
//   });
// };

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
        name: 'usage',
        message: questions[4]
      },
      {
        type: 'input',
        name: 'collabs',
        message: questions[5]
      },
      {
        type: 'input',
        name: 'gitHub',
        message: questions[6]
      }
    ])
    .then(answers => {
      let theTitle = answers.title;
      let theDescription = answers.description;
      let theLink = answers.link;
      let theSteps = answers.steps.split(",");
      let theCollabs = answers.collabs.split(",");
      let answerString = JSON.stringify(answers);
      console.log(answerString);
      // (answers => writeToFile('readme.md', answers));
      fs.writeFileSync('README.md', generateMarkdown(answers), (error) => {
        if (error) {
          console.log(error)
        } else {
          console.log('success!')
        }
      });
  });
};

// Function call to initialize app
init();
