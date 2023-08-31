const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});


// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Car.belongsTo(Reader, {
  foreignKey: 'reader_id',
});





module.exports = { Reader, Book, LibraryCard };
