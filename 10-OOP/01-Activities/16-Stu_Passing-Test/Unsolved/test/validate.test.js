const Validate = require('../validate.js');

describe('Validate', () => {

  // TODO: 
    it('Write a test that checks if isPassword() returns false when the password is less than 8 characters.', () => {
          const validateObject = new Validate();
         expect(validateObject.isPassword("asdfasd")).toEqual(false);
       });
  
  // TODO: 
    
    it('Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase. ', () => {
            const validateObject = new Validate();
           expect(validateObject.isPassword("aavdf1df")).toEqual(false);
       });

  // TODO: 
  it ('Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.')

            const validate= new Validate(); 
            expect(validateObject.isPassword ("")).toEqual(false);
  // TODO: 
  it ('Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.')

            const validate= new Validate(); 
            expect(validateObject.isPassword ("")).toEqual(false);
  // TODO: 
  it ('Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.')

            const validate= new Validate(); 
            expect(validateObject.isPassword ("")).toEqual(false);
});
