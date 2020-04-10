const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?"
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}




const questions = [

];

function writeToFile(fileName, data) {
}

function init() {
    return inquirer.prompt([
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
            "* [Contributing](#contributing)",
            "* [Tests](#tests)",
            "* [Questions](#questions)"
            ]
        },
        {
          type: "input",
          name: "github",
          message: "Enter your GitHub Username"
        },
        {
          type: "input",
          name: "linkedin",
          message: "Enter your LinkedIn URL."
        }
    ]);
}

init();
