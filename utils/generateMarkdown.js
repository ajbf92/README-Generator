// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  return;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  return;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // create the license section
  if (!license) {
    return "";
  }

  return `
  ## License
  
  ${license}

  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue, or contact me directly at ${data.email}. Also, you can find more of my work on github: https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
