const generateLiscense = liscenseInfo => {
    if (!liscenseInfo) {
        return '';
    }
    return `
    ## Liscense 
    
    This project is liscensed under the ${liscenseInfo} liscense.
    
    `
}

module.exports = readmeData => {
    const {liscense, ...body} = readmeData;
    return`
    #${body.name}

    ## Description

    ${body.about}

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [Liscense](#liscense)

    * [Contributing](#contributing)

    * [Tests](#tests)

    *[Questions](#questions)

    ##Installation

    To install dependencies run the following command:

    ${body.install}

    ## Usage

    ${body.tips}

    ${generateLiscense(liscense)}

    ## Contributing

    Made by ${body.contributers}

    ## Tests

    To test this page run the following test:

    ${body.tests}

    ## Questions

    For questions about this project, reach out through:
    ${body.username}
    ${body.email}
    `


}