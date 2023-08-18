// TODO: Import the Validate class.

const Validate = request("../validate");

// TODO: Describe a testing suite for checking the functionality of the Validate class.

 describe('Validate', ()=> {

    describe('isPassword', () =>{

        it ('fail if we pass an empty string')

            const validate= new Validate(); 
            expect(validateObject.isPassword ("")).toEqual(false);

    });
 });


// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
