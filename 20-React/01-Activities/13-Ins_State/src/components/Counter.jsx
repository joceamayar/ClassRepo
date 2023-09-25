// First we import `useState` with React so that we can take advantage of the hook
import { useState } from 'react';

//When we want to render we use need to use a State variable

export default function Counter() {
  // To set a state variable using `useState`, we give our variable a name of `count`.
  // We also set the name of the function that will update `count`. We called it `setCount`.
  // useState accepts only one argument - the initial value of the state variable.
  let [count, setCount] = useState(0); //facy version of creating a variable , asking render whatever change State variable  useState returns tupoles and it returns new values
  let [ta, setTa] = useState ("Andrew");

  // This is a handler that we will reference in our `onClick` attribute later
  const handleClick = () => {
    setCount((count + 1));
    console.log(`New value of count: ${count}`);
    setTa("justyn");
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}
