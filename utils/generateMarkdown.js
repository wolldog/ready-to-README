

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = license
  if (licenseBadge) {
    return `![License Badge](https://img.shields.io/badge/License-${licenseBadge}-success)`
  } else {
    return ''
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  const licenseLink = license

  if (licenseLink === 'MIT') {
    return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
  }
  if (licenseLink === 'Apache_2') {
    return `[Apache 2 License](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  }
  if (licenseLink === 'GNU_GPL_3') {
    return `[GNU_GPL_3 License](https://www.gnu.org/licenses/gpl-3.0.txt)`
  }
  else {
    return ``
  }

}

// Function that returns the license section of README
// If there is no license, return 'N/A'
function renderLicenseSection(license) {

  if(license === 'None'){
    return 'N/A';

  } else {

  return `
  ## <a id="license"></a>License

  This repo is licensed under the ${license} license.

  ${renderLicenseLink(license)}`
  }
}

// Function to generate markdown for README

function generateMarkdown(data) {

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
 
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
     
  
  ## <a id="installation"></a>Installation
  
  ${data.installation}
  
  ## <a id="usage"></a>Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## <a id="credits"></a>Contributors

  ${data.credits}

  ## <a id="tests"></a>Tests

  ${data.tests}

  ## <a id="questions"></a>Questions

  If you have questions regarding the ready-to-README application,
  you can contact me directly by email at ${data.email} or reach out
  to me on GitHub at https://www.github.com/${data.github}.`

}

//Makes the generateMarkdown function available to external calls
module.exports = generateMarkdown;
