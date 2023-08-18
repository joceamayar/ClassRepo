// // TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.

// class BlogPost{
//     constructor(authorName, title, text, createdOn){
//         this.authorName = authorName;
//         this.title = title;
//         this.text = text;
//         this.createdOn = createdOn;
//         // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
//         this.comments = []
//     }

//    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

//    printMetaData() {
   
//        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
//    }


//    // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
   
//    addComment(comment) {

//     this.comments.push(comment);
       
//     }
// }


// // -----------------------2nd class----------------------------------

// // TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// class Comment{
//     constructor(authorName, text, createdOn, reaction){
//         this.authorName = authorName;
//         this.text = text;
//         this.createdOn = createdOn;
//         this.reaction = this.reaction;
//     }

//     // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

//     printMetaData()

// }






// // TODO: Create a new object using the Comment class constructor.

// // TODO: Create a new object using the BlogPost class constructor.

// // TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// // TODO: Print the meta data for both the BlogPost and the Comment to the console.




class BlogPost {

    constructor(authorName, title, text, createdOn) {

        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = [];
    }

    printMetaData(){
       console.log(`Created by ${this.authorName} on ${this.createdOn}`)
    }
    
    addComment(comment){

        this.comments.push(comment)
    }

    printComments(){

        console.log(this.comments)
    }


}

class Comment {
    
    constructor(authorName,text, createdOn,reaction) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
        this.reaction = reaction;
    }


    printMetaData(){
        console.log(`Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`)
     }
}

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



