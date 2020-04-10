const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your GitHub username?"
      },
      {
        type: "list",
        name: "badge",
        message: "Would you like a badge?",
        choices: [
          "https://img.shields.io/badge/project-success-green.svg",
          "https://img.shields.io/badge/project-critical-red.svg",
          "https://img.shields.io/badge/project-important-orange.svg",
          "https://img.shields.io/badge/project-informational-blue.svg",
          "https://img.shields.io/badge/project-inactive-lightgrey.svg"
        ]
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of the new project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of this project?"
      },
      {
        type: "checkbox",
        name: "contents",
        message: "What will the table of contents include?",
        choices: [
          "* [Installation](#installation)",
          "* [Usage](#usage)",
          "* [License](#license)",
          "* [Contribution](#contribution)",
          "* [Tests](#tests)",
          "* [Questions](#questions)"
          ]
      },
      {
        type: "input",
        name: "installation",
        message: "How is the project installed"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage on the project?"
      },
      {
        type: "input",
        name: "license",
        message: "What is the license on the project?"
      },
      {
        type: "input",
        name: "contribution",
        message: "Who is contributing on the project?"
      },
      {
        type: "input",
        name: "tests",
        message: "How was the project tested?"
      },
      {
        type: "input",
        name: "questions",
        message: "Insert questions here:"
      }
];

function readme(answers) {
    return `
${answers.badge}
#${answers.title}
##Description
${answers.description}
##Table of Contents
${answers.contents}

##Installation
${answers.installation}

##Usage
${answers.usage}

##License
${answers.usage}

##Contributions
${answers.contribution}

##Tests
${answers.tests}

##Questions
${answers.questions}
`
}


function init() {
    return inquirer.prompt(questions);
}

init().then(function(answers) {
    console.log("Probably successful");
    return writeFileAsync("TESTREADME.md",readme(answers));
})
.catch(function(err){
    console.log(err);
});
