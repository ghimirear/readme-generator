// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const  questions = [
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
      choices: ['N/A', 'Apache 2.0', 'Boost 1.0', 'BSD 3-clause', 'EPL 1.0', 'GPL v3', 'IPL 1.0', "MIT", 'MPL 2.0', 'EPL 1.0'],
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

]

async function init(){
   inquirer.prompt(questions).then(response =>{
       fs.writeFile('READMESAMPLE.md',generateMarkdown(response),function(err){
           if (err) throw err;
           console.log("your readme is generated.")
               
           
       });
   })

}
init();


