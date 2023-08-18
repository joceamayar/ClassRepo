const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// is getting the values from the array and multiply them by 3
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
//this is turning tha array of number into an array of strings, its  replacing the values in the array with even or add strings  

//replaces each number with ether and even or add, depending on if we got a 0 or 1 back. 
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});


// this is used in technical interviews.
//if we % by 2 we ether get a 0 or a 1 which will help us identify the even and odd numbers 
