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

module.exports = BlogPost;