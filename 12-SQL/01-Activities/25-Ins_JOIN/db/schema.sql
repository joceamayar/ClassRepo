DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE courses_db;

USE courses_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE course_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INT,
  FOREIGN KEY (department)
  REFERENCES department(id)
  ON DELETE SET NULL
);


INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");

INSERT INTO course_names (name, department)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra", 3),
       ("History of the Internet", 4),
       ("Machine Learning", 4),
       ("Game Design", 1 ),
       ("Cloud Development", 1);
       


SELECT *
FROM course_names
inner join department
ON course_names.department = department.id;

---------------------------------------------

SELECT COURSE_NAMES.ID, 
COURSE_NAMES.NAME AS COURSENAME, 
department.NAME AS DEPARTMENTNAME
FROM COURSE_NAMES
INNER JOIN DEPARTMENT 
ON COURSE_NAMES.DEPARTMENT = DEPARTMENT.ID