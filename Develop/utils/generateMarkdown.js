
// function to generate markdown for README
function generateMarkdown(data) {

  //add title
  let content = `# ${data.title}\n\n`;

  // add selected licence
  switch (data.licence) {
    case "Apache-2.0":
      content += `[![License: ISC](https://img.shields.io/badge/Apache-2.0-lightgreen.svg)(https://opensource.org/licenses/https://opensource.org/licenses/Apache-2.0)\n\n`;
      break;
    case "CC0-1.0":
      content += `[![License: ISC](https://img.shields.io/badge/CC0-1.0-blue.svg)(https://choosealicense.com/licenses/cc0-1.0/)\n\n`;
      break;
    case "MPL-2.0":
      content += `[![License: ISC](https://img.shields.io/badge/MPL-2.0-blue.svg)(https://www.mozilla.org/en-US/MPL/2.0/)\n\n`;
      break;
    case "Modified-BSD":
      content += `[![License: ISC](https://img.shields.io/badge/Licence-Modified-BSD-blue.svg)(https://www.grassvalley.com/about/open_software/modified_bsd_license/)\n\n`;
      break;
    case "None":
      content += `![License: ISC](https://img.shields.io/badge/Licence-None-white.svg)\n\n`;
      break;
  }

  //add description
  if (data.description.trim() == "") {
    content += `## Project description
    Something about your project...\n`;
  } else {
    content += `## Project description
    ${data.description.trim()}\n\n`;
  }

  //add table of contents
  content += `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests-information)\n\n`;

  //add installation
  if (data.installation.trim() == "") {
    content += `## Installation
    How to install this project...\n\n
    step 1...
    step 2...
    ......\n\n`;
  } else {
    content += `## Installation
    ${data.installation.trim()}\n\n`;
  }

  //add usage
  if (data.usage.trim() == "") {
    content += `## Usage
    This project is used for...\n\n`;
  } else {
    content += `## Usage
    ${data.usage.trim()}\n\n`;
  }

  //add contributing
  if (data.contribution.trim() == "") {
    content += `## Contributing
    Contributions...\n\n`;
  } else {
    content += `## Contributing
    ${data.contribution.trim()}\n\n`;
  }

  //add tests information
  if (data.test.trim() == "") {
    content += `## Tests information
    Tests information...\n\n`;
  } else {
    content += `## Tests information
    ${data.test.trim()}\n\n`;
  }

  //add author information
  content += `## Author information
  GitHub: https://github.com/${data.username}\n
  Email-address: ${data.email}\n\n`;


  return content;
}
//exprot module
module.exports = {
  generateMarkdown: generateMarkdown
}
