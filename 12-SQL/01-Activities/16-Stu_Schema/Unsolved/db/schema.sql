-- Write your schema here --
DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;

CREATE TABLE categories (
  id INT NOT NULL primary key AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  category_name  VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT NOT NULL primary key AUTO_INCREMENT,
  category_id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);