

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `
  ## <a name="license"></a>License

  This repo is licensed under ${license}
  
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
 
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
     
  
  ## <a name="installation"></a>Installaiton
  
  ${data.installation}
  
  ## <a name="usage"></a>Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${data.credits}

  ${data.tests}

  ${data.email}

  ${data.github}
`
}

module.exports = generateMarkdown;
