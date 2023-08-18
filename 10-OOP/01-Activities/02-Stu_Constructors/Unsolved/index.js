// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object

function BlogPost(authorName, title, text,createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn= createdOn
    this.printMetaData = function () { //method
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
  }

let  blog = new BlogPost("Finn Szeto", "08/01/2023");

  blog.printMetaData();

    