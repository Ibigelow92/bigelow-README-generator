// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please input your project title",
    },
    {
        type: "input",
        name: "description",
        message: "Please input your project description",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select which license you wish to use",
    },
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain how to use your project",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please input the relative path to any screenshots you wish to use",
    },
    {
        type: "credits",
        name: "description",
        message: "Please list any collaborators, third-party assets used or tutorials followed",
    },
    {
        type: "input",
        name: "features",
        message: "Please list your project's features",
    },
    {
        type: "input",
        name: "contribution",
        message: "If you would like other developers to contribute to your project, please give some guidelines for how",
    },
    {
        type: "input",
        name: "tests",
        message: "Please explain how to test your project",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
