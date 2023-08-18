// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
//Super class, base class, parent class 
class ForumItem{
  constructor(authorName, createdOn, text){

    this.authorName = authorName;
    this.createdOn = createdOn;
    this.text = text;

  }

}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem{ 
  super(authorName, title, text, createdOn) {
    
    
    this.title = title;

    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, title, text, createdOn) //Super calls the constructure of the super class 

    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
let newComment = new Comment('Finn', 'No pawa No snacks', 'Wow', '01/02/23')

// TODO: Create a new object using the BlogPost class constructor.

let newBlogPost = new BlogPost ('Finnlee', 'No pawa No snacks', 'Wow', '01/02/23')

// TODO: Log both newly created BlogPost and Comment to the console.

Cosole.log(Comment)
console.log(BlogPost)