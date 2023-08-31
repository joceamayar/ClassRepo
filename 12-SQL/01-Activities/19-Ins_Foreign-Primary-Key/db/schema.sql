DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL -- if the instructure is deleted/ 
);


-- use id for the primary key 
-- use category_id for the forenge key



DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL auto_increment,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL -- only for forenge keys 
);


insert into instructors (first_name, last_name)
values ("Dane", "Edwards"), ("Andrew", "Layendecker"),
("Justyn", "Subrai");

insert into courses (course_title, instructor_id )
values
("HTML", 1), ("Cooking", 2), ("shooting", 3);


delete from instructors where id = 1;

select * from courses;