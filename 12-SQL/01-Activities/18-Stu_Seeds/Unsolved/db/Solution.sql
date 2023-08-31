DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

INSERT INTO products (product_name, category_name)
VALUES ("spinach", "produce"),
       ("peanut butter", "staples"),
       ("peas-canned", "canned goods"),
       ("ice cream", "frozen"),
       ("potato chips", "snacks"),
       ("papitas firtas", "snacks");
       
SELECT * FROM products 

-- run it in produce

