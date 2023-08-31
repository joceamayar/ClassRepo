DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE courses_db;

USE courses_db;

CREATE TABLE course_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department INT,
  total_enrolled INT
)



INSERT INTO course_names (name, department, total_enrolled)
VALUES ("Intro to JavaScript", 1, 20),
       ("Data Science", 2, 40),
       ("Linear Algebra", 3, 11),
       ("History of the Internet", 4, 5),
       ("Machine Learning", 4, 52),
       ("Game Design", 1 , 23),
       ("Cloud Development", 1, 81);
       



SELECT *
FROM course_names;

SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;
