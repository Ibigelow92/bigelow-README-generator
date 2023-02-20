// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
  const licenseNew = license.toLowerCase()
  return `![This licence link](https://choosealicense.com/licenses/${licenseNew})`
}
return "";}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Screenshot
![alt-text](${data.screenshot})
## Credits
${data.credits}
## Features
${data.features}
## How to contribute
${data.contribution}
## Tests
${data.tests}
## Creator
${data.creator}
## Email
${data.email}
## License
${renderLicenseBadge(data.license[0])}

${renderLicenseLink(data.license[0])}

`;
}

module.exports = generateMarkdown;
