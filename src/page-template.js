const generateLiscense = liscenseInfo => {
    if (liscenseInfo == "None") {
        return '';
    } else {
    return `
    ## Liscense

    This project is liscensed under the ${liscenseInfo} liscense.

    `
    }
}

const liscenseBadge = badgeInfo => {
    if (badgeInfo === "None") {
        return '';
    } else if (badgeInfo === "MIT") {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
    } else if (badgeInfo === "APACHE 2.0") {
        return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
    } else if (badgeInfo === "GPL 3.0") {
        return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
    } else {
        return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    `
    }
}

const generateUsage = tipsText => {
    if (!tipsText) {
        return '';
    } else 
    return `
    ## Usage

    ${tipsText}
    `
}

const generateContributions = contributionsText => {
    if (!contributionsText) {
        return '';
    } else 
    return `
    ## Contributions

    ${contributionsText}
    `
}

module.exports = readmeData => {
    const {liscense, tips, contributions, ...body} = readmeData;
    return`
    # ${body.project}

    ${liscenseBadge(liscense)}

    ## Description

    ${body.description}

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [Liscense](#liscense)

    * [Credits](#credits)

    * [Tests](#tests)

    * [Contributions](#Contributions)

    * [Questions](#questions)

    ## Installation

    To install necessary dependencies run the following command: ${body.install}

   ${generateUsage(tips)}

    ${generateLiscense(liscense)}

    ## Credits

    ${body.credits}

    ## Tests

    To test this page run the following test: ${body.tests}

   ${generateContributions(contributions)}

    ## Questions

    For questions about this project, reach out directly at ${body.email}

    You can find more of my work at https://github.com/${body.username}/
    `


}