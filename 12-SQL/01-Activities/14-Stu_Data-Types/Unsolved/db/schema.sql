DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id,
  first_name,
  last_name,
  value_card_member
);

-----------------------------------------------------

DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  value_card_member  BOOLEAN NOT NULL
);

SELECT * FROM customers 
       


