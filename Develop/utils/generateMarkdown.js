// function to generate markdown for README
function generateMarkdown(data) {

  let line = `---\n`;


  let content = `# ${data.title}\n\n`;
  content += line;

  switch (data.licence) {
    case "Apache-2.0":
      content += `[![License: ISC](https://img.shields.io/badge/Apache-2.0-lightgreen.svg)](https://opensource.org/licenses/https://opensource.org/licenses/Apache-2.0)\n\n`;
      break;
    case "CC0-1.0":
      content += `[![License: ISC](https://img.shields.io/badge/CC0-1.0-blue.svg)](https://choosealicense.com/licenses/cc0-1.0/)\n\n`;
      break;
    case "MPL-2.0":
      content += `[![License: ISC](https://img.shields.io/badge/MPL-2.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)\n\n`;
      break;
    case "Modified-BSD":
      content += `[![License: ISC](https://img.shields.io/badge/Licence-Modified-BSD-blue.svg)](https://www.grassvalley.com/about/open_software/modified_bsd_license/)\n\n`;
      break;
    case "None":
      content += `[![License: ISC](https://img.shields.io/badge/Licence-None-white.svg)]\n\n`;
      break;
  }

  if (data.description == "") {
    content += `## Project description
    Something about your project...\n`;
  } else {
    content += `## Project description
    ${data.description}\n\n`;
  }
  content += line;

  content += `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests-information)\n\n`;
  content += line;

  if (data.installation == "") {
    content += `## Installation
    How to install this project...\n\n`;
  } else {
    content += `## Installation
    ${data.installation}\n\n`;
  }
  content += line;

  if (data.usage == "") {
    content += `## Usage
    This project is used for...\n\n`;
  } else {
    content += `## Usage
    ${data.usage}\n\n`;
  }
  content += line;

  if (data.contribution == "") {
    content += `## Contributing
    Contributions...\n\n`;
  } else {
    content += `## Contributing
    ${data.contribution}\n\n`;
  }
  content += line;

  if (data.test == "") {
    content += `## Tests information
    Tests information...\n\n`;
  } else {
    content += `## Tests information
    ${data.test}\n\n`;
  }
  content += line;

  content += `## GitHub USERNAME
    ${data.username}\n\n`;
  content += line;

  content += `## Email-address
    ${data.email}\n\n`;
  content += line;


  return content;
}

module.exports = {
  generateMarkdown: generateMarkdown
}
