// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## ${'Description:'}

  ${data.description}

  ## ${'Live Link:'}

  ${data.link}

  ## ${'Steps Required:'}

  - ${data.steps.split(', ')[0]}
  - ${data.steps.split(', ')[1]}
  - ${data.steps.split(', ')[2]}

  ## ${'Usage:'}

  ${data.usage}

  ## ${'Contributors:'}

  - ${data.collabs.split(', ')[0]}
  - ${data.collabs.split(', ')[1]}

  ## ${'Questions? Contact me on GitHub'}

  ${data.gitHub}
`;
}

module.exports = generateMarkdown;
