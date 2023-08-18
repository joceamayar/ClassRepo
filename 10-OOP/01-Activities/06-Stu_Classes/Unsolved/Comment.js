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

module.exports = Comment;