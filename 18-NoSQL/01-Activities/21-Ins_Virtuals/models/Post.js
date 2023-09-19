const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  //virtuals are properties that do not exist on our data base but , i can ask the server for the end point that is serving this data. this prperty only exist on the data that goes back to the client.  But it does not exist on the data bases,
  // if we don't have this: property needs to be here 

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
