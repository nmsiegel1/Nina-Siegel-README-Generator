// Changes formatting of the page depending on the liscense the user selects
const generateLiscense = liscenseInfo => {
    if (liscenseInfo == "None") {
        return '';
    } else {
    return `
## Liscense

 This project is liscensed under the ${liscenseInfo} liscense.`
    }
}

// Adds the correct liscense badge to the top of the README
const liscenseBadge = badgeInfo => {
    if (badgeInfo === "None") {
        return '';
    } else if (badgeInfo === "MIT") {
    return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (badgeInfo === "APACHE 2.0") {
        return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (badgeInfo === "GPL 3.0") {
        return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
        return `
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
}

// changes formatting of the page depending on if the user adds any content to the contributions section
const generateContributions = contributionsText => {
    if (!contributionsText) {
        return '';
    } else 
    return `
## Contributions

${contributionsText}`
}

// adds the liscense to the table of contents if the user selects a liscense
const liscenseToc = liscense => {
    if (liscense === "None") {
        return '';
    } else {
        return `
* [Liscense](#liscense)`
    }
}

// adds contributions to the table of contents if the user adds information about contributions
const contributionsToc = contributions => {
    if (!contributions) {
        return '';
    } else {
        return `
* [Contributions](#Contributions)`
    }
}

// template for the main README.md file
// The data from inquirer is added to this template
module.exports = readmeData => {
    const {liscense, contributions, ...body} = readmeData;
    return `
# ${body.project}

${liscenseBadge(liscense)}

## Description

${body.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${liscenseToc(liscense)}

* [Credits](#credits)

* [Tests](#tests)

${contributionsToc(contributions)}

* [Questions](#questions)

## Installation

To install necessary dependencies run the following command: ${body.install}

## Usage

${body.tips}

${generateLiscense(liscense)}

## Credits

${body.credits}

## Tests

To test this page run the following test: ${body.tests}

${generateContributions(contributions)}

## Questions

For questions about this project, reach out directly at ${body.email}

You can find more of my work at https://github.com/${body.username}/`
}