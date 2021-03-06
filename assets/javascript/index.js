// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown1 = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide an explanation of what your project does:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'In great detail, explain how you install your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please, explain how to use your project:',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please choose your license (use your arrow keys to navigate the list and press enter when you found correct license): ',
    choices: ['None',
      'Apache License 2.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Creative Commons Zero v1.0 Universal',
      'Mozilla Public License 2.0',
    ],
    name: 'license',
  },
  {
    type: 'input',
    message: 'List any and all contributors:',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'Please, step-by-step, explain your test instructions:',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Please, enter your email address where you can be contacted for any questions about your project:',
    name: 'questions',
  }
];

function writeToFile(generateMarkdown) {
  fs.writeFile("README.md", generateMarkdown, function (err) {
    err ? console.log(err) : console.log('Congratulations, you have successfully created a README.md for your project!');
  })
}



// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data)
    let generateMarkdown = generateMarkdown1(data);
    writeToFile(generateMarkdown);
  })
}

// Function call to initialize app
init();

