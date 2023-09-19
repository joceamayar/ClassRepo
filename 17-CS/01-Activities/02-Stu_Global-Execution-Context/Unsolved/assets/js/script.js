// 1) Where is carNoise stored?
// in a variable in the global execution contex 
const carNoise = 'Honk';
// 2) Where is goFast stored?
// in a function expression because expressions are not hoisted, so have to call the fucntion after is 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // assigned whe goFast is called, the value is stored in speed, in the local scope
  
  // 5) Where is makeNoise stored?
  // is a fuction expression 
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }
// function declaration 
function makeNoise (sound) {
  console.log(`My speed is at ${speed}, time to ${sound}`);
}
  

  // 6) What happens in the following statement?
  // the funtion carNoise is been call
  //grabinf carNoise from the global execution contex, passing it to makeNoise
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// this is a conditional 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}


