const BlogPost = require('../lib/BlogPost.js');
const Comment = require('../lib/Comment.js');

describe('BlogPost', () => {
  // TODO: Add a comment describing this test.
  //Testing instatiation to make sure it is working propertly 
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const blogpost = new BlogPost();

      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // TODO: Add a comment describing this test.
  //testing 
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'John Doe';
      const blogpost = new BlogPost(authorName);

      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  //testing the second parameter
  describe('Initialize title', () => {
    it('should set title properly', () => {
      const title = 'My First Post';
      const blogpost = new BlogPost('John Doe', title);

      expect(blogpost.title).toBe(title);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'Dogs are super cute!';
      const blogpost = new BlogPost('John Doe', 'My First Post', text);

      expect(blogpost.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        createdOn
      );

      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  //making sure that there is a coment that exist and that there is a zero, making sure the array is empty
  describe('Initialize comments', () => {
    it('should create blogpost array with a length of 0', () => {
      const blogpost = new BlogPost();

      expect(blogpost.comments.length).toBe(0);
    });
  });

  // TODO: Add a comment describing this test.
  //If  i add a comment object to the coments arrya in my blogpost, is the first item an instance of tha commnet class?
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      const blogpost = new BlogPost();
      const comment = new Comment();
      blogpost.addComment(comment);

      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
    });L
  });

  // TODO: Add a comment describing this test.
  //testin tha it prints out the way we are expectcting it to do 
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        '12/15/2021'
      );

      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});
