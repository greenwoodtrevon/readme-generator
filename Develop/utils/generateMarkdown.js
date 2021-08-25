// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    
    return `![githubLicense](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }

  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#License)`
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== "None") {
  return `### License`
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## ${'Description:'}

  ${data.description}

  ## Table of Contents
  ${renderLicenseLink(data.license)}
  * [Link](#Link)
  * [Steps](#Steps)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [GitHub](#GitHub)

  ## ${'Link'}

  ${data.link}

  ## ${'Steps'}

  - ${data.steps.split(', ')[0]}
  - ${data.steps.split(', ')[1]}
  - ${data.steps.split(', ')[2]}

  ## ${'Usage'}

  ${data.usage}

  ## ${'Contributors'}

  - ${data.collabs.split(', ')[0]}
  - ${data.collabs.split(', ')[1]}

  ## ${'GitHub'}

  ![${data.github}](${data.gitHub})
`;
}

module.exports = generateMarkdown;
