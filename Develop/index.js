//using package
const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./utils/generateMarkdown.js");

//User instruction
function userInstruction() {
    console.log("README.md Generator");
    console.log("User instruction:");
    console.log("Follow the prompt to input informations");
    console.log("'Ctrl+c' to exit program")
}


// array of questions for user

const questions = [
    {
        type: "input",
        message: "What is the title of your project?(Required)",
        name: "title",
        validate: function (value) {
            if (value.trim().length) {
                return true;
            }
            else {
                return "Please enter your project TITLE!";
            }

        }
    },
    {
        type: "input",
        message: "Please write some description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "please write the installation instruction:",
        name: "installation"
    },
    {
        type: "input",
        message: "Please write the usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Please write the contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please write the tests information:",
        name: "test"
    },
    {
        type: "input",
        message: "Please enter your GitHub username:(Required)",
        name: "username",
        validate: function (value) {
            if (value.trim().length) {
                return true;
            }
            else {
                return "Please enter your GitHub USERNAME!";
            }

        }
    },
    {
        type: "input",
        message: "Please enter your email address:(Required)",
        name: "email",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                return "Please enter a valid email";
            }
        }
    },

    {
        type: "list",
        message: "Please choose a license:",
        name: "licence",
        default: "None",
        choices: ["Apache-2.0", "CC0-1.0", "MPL-2.0", "Modified-BSD", "None"],
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, function (error) {
        if (error) {
            console.log(error);
        }
        else return ("Success!");
    })
}

// function to initialize program
async function init() {
    console.clear();
    userInstruction();

    try {
        const reply = await inquirer.prompt(questions);
        let readMe = md.generateMarkdown(reply);
        writeToFile("README", readMe);
        console.log("README.md has been created successfully!");
    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();
