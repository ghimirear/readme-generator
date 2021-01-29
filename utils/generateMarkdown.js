
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badge = function renderLicenseBadge(license) {
   splitLicense = license.split(' ').join('%20');
  if (license !== 'N/A') {
    return `[![GitHub license](https://img.shields.io/static/v1?label=License&message=`+ splitLicense +`&color=blue.svg)]`
  }
  else{
    return "";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const licenselink = function renderLicenseLink(license) {
  licenseSplit = license.split(" ").join('-');
  if (license == "N/A") {
    return '';
  }
  else if (license =='GPL v3') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license == "boost 1.0") {
    return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else {
   return `[${license}](https://opensource.org/licenses/` + licenseSplit + `)`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate contributors numbers and their github rofile
const contributorLink = function (username){
  if (username === '' || username ==='no') {
    return
  }
  else{
  var usernames = username.split(' ')
 for (var i = 0; i < usernames.length; i++) {
   var link = `[${usernames[i]}](https://github.com/`+ usernames[i] +`)`
    console.log(link);
    }
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.git}/${data.title}
  ## Table of Contents:
  - [Title](#Title)
  - [Summary](#Summary)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribute](#Contribute)
  - [Contributors](#Contributors)
  - [Licence](#Licence)
  - [Contact](#Contact)
  # Title
  # ${data.title}
  ### Licence 
  ${badge(data.license)} ${licenselink(data.license)}
  ### Summary
  ${data.summary}
  ### Installation 
  ${data.installation}
  ### How to use your application 
  ${data.usage}
  ### How to contribute to this project?
  ${data.contribute}
  ### Contributors 
  ${contributorLink(data.username)}
  ### Acknowledge 
  ${data.acknowledge}
  # Contact
  ### Questions 
  If you have any questions reachout on \n https://github.com/${data.git}\n
  ### E-mail
  For more information bout this project e-main me on: \n${data.email}\n
`;
}

    module.exports = generateMarkdown