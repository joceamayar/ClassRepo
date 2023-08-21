const fs = require("fs")

//Change to asyncReadFile
function asyncWriteFile() {
 
    return new Promise((resolve, reject) => {

        //Change read from file helloWorld.txt
        //change to readfile

        fs.("", "utf8", function (err,data) {
            if (err) {
              reject(err)
            }
            else {
        //send the data to the .then
                resolve()
            }
        })
    })
};

//TODO:console log what was read from file
asyncWriteFile()
.then(()=> console.log("wrote successfully to file!"))
.catch((error)=>console.log(error))