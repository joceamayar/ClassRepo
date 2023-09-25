import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// "export default" is used to export the "Counter" component as the default export
// which can be imported and used in other parts of the application.
 
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // The useState hook is used to declare a state variable called "count" and a
  // function "setCount" to update it. The initial state is set to 0.
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
    // This click handler, "handleIncrement," is called when the "Increment" button
  // is clicked. It increases the "count" state by 1.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
    // This click handler, "handleDecrement," is called when the "Decrement" button
  // is clicked. It decreases the "count" state by 1, but only if "count" is greater
  // than 0 to prevent negative values
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/*  */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
