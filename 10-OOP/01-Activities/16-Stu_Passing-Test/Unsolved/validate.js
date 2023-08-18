class Validate {}

isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  
  if(password.lenght <8 )

  return false;

  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=97 && char.charCodeAt() <=122)
      containLowerCase =  true

  }

  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=65 && char.charCodeAt() <=90)
      containLowerCase =  true

  }

  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=48 && char.charCodeAt() <=57)
      containLowerCase =  true

  }


  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=48 && char.charCodeAt() <=57)
      containLowerCase =  true

  }


  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=48 && char.charCodeAt() <=57)
      containLowerCase =  true

  }


  let containLowerCase = false;
  for (const char of password) {
      if(char.charCodeAt() >=48 && char.charCodeAt() <=57)
      containLowerCase =  true

  }


  }


  
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.

  return (containLowerCase && containUpperCase && containsNumber)


};

module.exports = Validate;
