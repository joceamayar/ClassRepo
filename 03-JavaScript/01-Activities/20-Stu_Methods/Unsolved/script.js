var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations);


planets.pop();
console.log(planets);

let constellationsAndPlanets = constellations.concat(planets);
console.log(constellationsAndPlanets);

//or you can also concat the two arrays by: 

// let constellationsAndPlanets = [...constellations, ...planets];
// console.log(constellationsAndPlanets);


