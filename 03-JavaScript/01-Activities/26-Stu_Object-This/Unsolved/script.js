// TODO: What does 'this' refer to?
//Refers to the window 
console.log(this);


// TODO: What does 'this' refer to?
//it refers to the window object

function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//refers to the child
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
//cash server a method is a "top level fuction that refer to the funtion" 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
