// TODO: Add a comment explaining what is being passed to this "child" component as props
// Props being passed to CardBody component:
// - count: The current count value to display in the card text.
// - handleIncrement: A function to be called when the Increment button is clicked.
// - handleDecrement: A function to be called when the Decrement button is clicked.

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
