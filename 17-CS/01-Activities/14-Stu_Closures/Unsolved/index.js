// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    return {
        increment: function () {
            return (
             ++count //increment count and then return
             //count ++ return before incrementing. 
        
                );
            },
        };
    }

    let object = counter(); 
    


    module.exports = counter;

    // The closure - is the mother of children funtion, we have a funtion tha is referance the variabe 
    // Gives you access to the outer funtion 