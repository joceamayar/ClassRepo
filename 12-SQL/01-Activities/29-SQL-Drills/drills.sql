-- get everything from the employees table

select * from employees

-- this time only retrieve the firstName, lastName and officeCode
select 
firstname, 
lastname, 
officecode
from employees

-- filter the last query get all the officeCodes less than 3

select 
firstname, 
lastname, 
officecode
from employees where officeCode < 3


-- get everything from the offices table
SELECT * FROM offices 

-- this time only retrieve the city, phone, and state, and officeCode
SELECT city, phone, state, officeCode 
FROM offices

-- filter the last query, get the state of "CA"

SELECT city, phone, state 
FROM offices
where state = "CA"

--join the offices table to the employees table and return all of the data
SELECT * FROM  offices
INNER JOIN employees
ON offices.officecode = employees.officeCode


--join the offices table to the employees table and return  firstName, lastName, officeCode city, phone, and state
SELECT firstName, lastName, officeCode, city, phone, state FROM  offices
INNER JOIN employees
ON offices.officecode = employees.officeCode


--filter the last query by city, only retrieve the entry for Boston

SELECT firstName, lastName, officeCode, city, phone, state FROM  offices
INNER JOIN employees
ON offices.officecode = employees.officeCode
where city = "Boston"

--filter instead by getting all cities that contain the letter "o" in the city column


SELECT firstName, lastName, officeCode, city, phone, state FROM  offices
INNER JOIN employees
ON offices.officecode = employees.officeCode
where city like "%o%"


select firstname, 
lastname, 
city, 
phone, 
state, 
employees.officecode
from employees
inner join offices
on employees.officeCode = offices.officeCode
where city
like '%o%';


--return everything from employees and customers
select * from employees 
inner join customers
on employees.employeeNumber = customers.salesRepEmployeeNumber

-- join employee to customers table,

select firstName as employee_First_Name, lastName as employee_Last_Name from employees 
inner join customers
on employees.employeeNumber = customers.salesRepEmployeeNumber


-- return only the employee firstname and lastname, and customer firstname and last name and customer phone number
select firstName as employee_First_Name, 
lastName as employee_Last_Name, 
offices.phone as employeeNumber 
extension as extension  
from employees 
inner join customers
on employees.employeeNumber = customers.salesRepEmployeeNumber
inner join offices on offices,officesCode = employees.officeCode


-- return all the employees who do not have a customer

---------Left Join----- give me all the customers who are associated with x(employee)

select firstname as employeeFirst, 
       lastName as employeeLast,
       contactFirstName as customerFirst, 
       contactLastName as customerLast, 
       customers.phone as customerPhone,
       offices.phone as employeeNumber,
       extension as extension
       from employees
left join customers on 
employees.employeeNumber = customers.salesRepEmployeeNumber
where contactFirstName is null

-- return all the customers who do not have an employee

---------right Join----- give me all the customers who are not associated with x(employee)

select firstname as employeeFirst, 
       lastName as employeeLast,
       contactFirstName as customerFirst, 
       contactLastName as customerLast, 
       customers.phone as customerPhone,
       offices.phone as employeeNumber,
       extension as extension
       from employees
right join customers on 
employees.employeeNumber = customers.salesRepEmployeeNumber
where firstname is null





get "/api"
SELET 

post
Insert

delete
delete from 

put
update 
