

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = license
  if (licenseBadge) {
    return `![License Badge](https://img.shields.io/badge/License-${licenseBadge}-success)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  const licenseLink = license

  if (licenseLink === 'MIT') {
    return `[MIT Link](https://www.mit.edu/~amini/LICENSE.md)`
  }
  if (licenseLink === 'Apache_2') {
    return `[Apache 2 Link](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  }
  if (licenseLink === 'GNU_GPL_3') {
    return `[GNU_GPL_3](https://www.gnu.org/licenses/gpl-3.0.txt)`
  }
  else {
    return ``
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === 'None'){
    return 'N/A';

  } else {

  return `
  ## <a name="license"></a>License

  This repo is licensed under ${license}
  
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

  ${renderLicenseSection(data.license)}
 
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
     
  
  ## <a name="installation"></a>Installation
  
  ${data.installation}
  
  ## <a name="usage"></a>Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## <a name="credits"></a>Contributors

  ${data.credits}

  ## <a name="tests"></a>Tests

  ${data.tests}

  ## <a name="questions"></a>Questions

  If you have questions regarding the ready-to-README application,
  you can contact me directly by email at ${data.email} or reach out
  to me on GitHub at https://www.github.com/${data.github}.

 
`
}

module.exports = generateMarkdown;
