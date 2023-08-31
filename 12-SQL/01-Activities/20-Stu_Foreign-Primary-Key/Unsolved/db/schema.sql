-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

USE customers_db;

CREATE TABLE customer (
  id INT NOT NULL auto_increment,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customer(id)
  ON DELETE SET NULL --or ON DELETE CASCADE
);

insert into customer (first_name, last_name)
values ("jj", "Edwards"), ("Andrew", "Layendecker"),
("Justyn", "Subrai");

insert into customer_order ( customer_id, course_title )
values("HTML", 1), ("Cooking", 2), ("shooting", 3);


delete from customer where id = 3;

select * from customer_order