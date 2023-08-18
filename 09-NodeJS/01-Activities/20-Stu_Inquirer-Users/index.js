const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What languages do you know?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'What is your preferred method of communication?',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );



