// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "None"
  }
  if (license === "Apache"){
   return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } 
  
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if(license === "Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }


}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.title}

  ## Description:
  ${data.description}

  ## Demo of project: 


  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  
  ## Installation:
  ${data.installation}


  ## Usage:
  ${data.usage}


  ## Collaborators:
  ${data.collaborators}

  ## License:
  ${renderLicenseLink(data.license)}

  ## Github Username: ${data.github}

  ## Email: ${data.email}
`;
}

module.exports = generateMarkdown;