DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
CREATE TABLE biography (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL primary key auto_increment,
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(100) NOT NULL,
  pages INT,
  author VARCHAR(100) NOT NULL
  
);

insert into biography (title, pages, author)
values ("kyle O'Hare", 33, "Hamilton"),
("kyle O'Hare", 33, "Hamilton");

select * from biography