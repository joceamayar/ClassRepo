const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  //Will delete tthe reader 
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
//To access the READER and LibraryCard in other files
module.exports = { Reader, LibraryCard };


//iNDEX.JS Will represent all the relationships bewtween the table 
//Index.js to export other files 