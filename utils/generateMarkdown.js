// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Unlicense" || license === ""){ //Dont enter anything if no license option was chosen
    return ""
  } else if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license === "GPLv2"){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Unlicense" || license === ""){ //Dont enter anything if no license option was chosen
    return ""
  } else if(license === "Apache"){
    return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
  } else if(license === "MIT"){
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if(license === "GPLv2"){
    return `[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)} \n
  Licensed under the ${renderLicenseLink(license)} license
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //
  return `# ${data.projName}
  ## Description
  ${data.projDescr}
  ## Table of Contents
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [Credits](#credits)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Questions](#questions) 
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credit}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Contact me via email at ${data.email}
  View my other projects on [github](github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
