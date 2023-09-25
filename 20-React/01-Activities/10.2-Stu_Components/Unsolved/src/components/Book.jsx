//use the values defined in the book object to render them here!
function Book({title, author, id}) {
  return <div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <p className="card-text">{author}</p>
    <a href="#" className="card-link">{id}</a>
  </div>
</div>;
}

export default Book;
