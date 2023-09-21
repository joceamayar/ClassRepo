import List from "./components/List";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    read: true
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    read: true
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    read: false
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    read: true
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    read: false
  },
  {
    id: 6,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    read: true
  }
];

function App() {
  return <List books={books} />;
}

export default App;
