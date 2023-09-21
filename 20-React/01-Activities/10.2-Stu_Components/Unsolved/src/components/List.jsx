import Book from "./Book";

function List(props) {
  console.log(props.books)
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to pass values to the book component   */}
      {props.books.map((book) => {

        return (
          // TODO: Your code here
          <Book />
        );
      })}
    </ul>
  );
}

export default List;
