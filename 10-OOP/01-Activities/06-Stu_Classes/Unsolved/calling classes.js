let Comment = require("./Comment")
let BlogPost = require("./BlogPost")


let newComment = new Comment("Phil", "I love javascript!", "08/16/2023", "<3")
// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.
let newBlogPost = new BlogPost("Daniel", "Super Cool Blog", "lipsum Orem", "08/16/2023")

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
newBlogPost.addComment(newComment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
newBlogPost.printMetaData();
newComment.printMetaData();

newBlogPost.printComments();