// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync= util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
 return inquirer.prompt([
    {
        //asking user to input different data to construct a readme
        type:'input',
        message : "Enter name of your project..",
        name : 'title',
        // validating input is not empty.
        validate: (value) =>{if (value) {
                    return true   
                }
            else{
                return 'please enter name of your project..'
            }
        }

    },
    {
      type: 'input',
      message : 'brief summary of your project',
      name : 'summary',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'plase provide some information about your project'
    }}  
    },
    {
      type: 'input',
      message : 'how to install your application',
      name : 'installation',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'plase provide some information on installing project'
    }}  
    },
    {
      type: 'input',
      message : 'how to use your application?',
      name : 'usage',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'how to use your application'
    }}  
    },
    {
      type: 'input',
      message : 'how to contribute to your application?',
      name : 'contribute',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'how to contribute to your project?'
    }}  
    },
    {
      type: 'input',
      message : 'any contributors to your project? please provide github username of contributor',
      name : 'contributors',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'any contributos to your project?'
    }}  
    },
    {
      type: 'list',
      //providing list to  select any one of them.
      message : 'what licence did you use?',
      name : 'license',
      choices: [
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause',
        '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
        '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
        '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        'N/A'
    ],
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'please select any one type'
    }}  
    },
    {
      type: 'input',
      message : 'add acknowledgement',
      name : 'acknowledge',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'provide some acknowlwdgement'
    }}  
    },
    {
      type: 'input',
      message : 'what is your github username?',
      name : 'git',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'please provide your github user name to continue'
    }}  
    },
    {
      type: 'input',
      message : 'what is your prefered e-mail address?',
      name : 'email',
      validate: (value) => { if (value){
          return true 
      }
    else{
        return 'please provide your github user name to continue'
    }}  
    },

])}
function generateMarkdown(response){
    return`
    # ${response.title}
    ## Table of Contents
    - [Title](#title)
    - [Summary](#summary)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribute](#contribute)
    - [Contributors](#contributors)
    - [Licence](#licence)
    - [Contact](#contact)
    # Title
    # ${response.title}
    ### Licence 
    ${response.license}
    ### Summary 
    ${response.summary}
    ### Installation 
    ${response.installation}
    ### How to use your application 
    ${response.usage}
    ### How to contribute to this project?
    ${response.contribute}
    ### Contributors 
    https://github.com/${response.contributors}

    ### Acknowledge 
    ${response.acknowledge}
    # Contact
    ### Questions 
    If you have any questions reachout on https://github.com/${response.git}
    ### E-mail
    For more information bout this project e-main me on ${response.email}`
};
async function init(){
    try {
        const response = await promptUser();
        const readMe = generateMarkdown(response);
        await writeFileAsync('README.md', readMe);
        console.log(' Congrats your README is generated..');
    } catch(err){
        console.log(err);
    }

}
init();

// .then(({
//     title, 
//     summary, 
//     installation,
//     usage, 
//     contribute,
//     contributors,
//     license,
//     acknowledge,
//     git,
//     email

// }) => {

// const template = `# ${title}
// ## Table of Contents
// - [Title](#title)
// - [Summary](#summary)
// - [Installation](#installation)
// - [Usage](#usage)
// - [Contribute](#contribute)
// - [Contributors](#contributors)
// - [Licence](#licence)
// - [Contact](#contact)
// # title
// # ${title}
// ### Licence 
// ${license}
// ### Summary 
// ${summary}
// ### Installation 
// ${installation}
// ### How to use your application 
// ${usage}
// ### How to contribute to this project?
// ${contribute}
// ### Contributors 
// ${contributors}

// ### Acknowledge 
// ${acknowledge}
// # Contact
// ### github 
// If you have any questions rechout on https://github.com/${git}
// ### E-mail
// For more information bout this project e-main me on ${email}
// `;
// createNewFile(title, template);
// });
// function createNewFile(fileName, data){
    
//     fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (error) =>{
//         if(error){
//             console.log(error)
//         }
//         console.log(" Congrats your README is generated")
//     })
// }

