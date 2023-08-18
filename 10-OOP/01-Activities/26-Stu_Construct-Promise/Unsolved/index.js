const http = require('http');

// TODO: What does this function return?
// It returns a Promise that resolves with the data that is retrieved from the URL or rejects when is undefine with an error
const asyncRequest = (url) => // because there is no brackets there is a return imply
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      //.on -
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do? 
          // If there was an error during the request, rejects the promise with the created error object.
          reject(error);
        } else {
          // TODO: What does the following line do?
          // If the request was successful, resolve the promise with the accumulated raw data.
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  .then((data) => console.log(data)) // its call when it passes . when we are done recivign all the data 
  // TODO: When is the callback function passed to .catch() called by the promise?
  .catch((error) => console.log(error)); //when in throws an error 
