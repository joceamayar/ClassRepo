DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE book_prices (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  price INT NOT NULL
);

CREATE TABLE favorite_books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price INT,
  FOREIGN KEY (book_price)
  REFERENCES book_prices(id)
  ON DELETE SET NULL
);


INSERT INTO book_prices (price)
VALUES (1),
       (2),
       (5),
       (10),
       (15);

INSERT INTO favorite_books (book_name, in_stock, book_price)
VALUES ("The Great Gatsby", true, 1),
       ("Huckleberry Finn", true, 3),
       ("100 Years of Solitude", false, 5),
       ("Things Fall Apart", false, 1),
       ("Crime and Punishment", true, 2),
       ("Moby Dick", true, 4),
       ("Decameron", false, 1);



---------------Inner Join ----------------------------

SELECT * FROM book_prices
INNER JOIN favorite_books
ON book_prices.id = favorite_books.book_price

---------------Sort by filds ----------------------------

SELECT  book_name, price FROM book_prices
INNER JOIN favorite_books
ON book_prices.id = favorite_books.book_price

---------------Rename filds using 'AS' ----------------------------

SELECT  book_name AS title, price AS price_in_pesos FROM book_prices
INNER JOIN favorite_books
ON book_prices.id = favorite_books.book_price

