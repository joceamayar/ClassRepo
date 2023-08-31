--Resets the data base if it already exist and if not it 
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
--The USE statement tells MySQL to use the named database as the default (current) database for subsequent statements. 
USE books_db;
--creates a table 
CREATE TABLE biographies (
    
  id INT NOT NULL auto_increment primary key,
  name VARCHAR(100) NOT NULL
);
--
INSERT INTO biographies (name)
VALUES
    (  "Diary of Anne Frank"),
    (  "Frida: A Biography of Frida Kahlo"),
    ( "Long Walk to Freedom");

SELECT * FROM biographies;