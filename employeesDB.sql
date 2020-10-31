DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE departments (
  id INTEGER(10) AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INTEGER(10) AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INTEGER(10) AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Danielli', 'Franquim', 1, 1);
INSERT INTO departments (department_name) VALUES ('QA');
INSERT INTO roles (title, salary, department_id) VALUES ('Analyst', 50.00, 1);



SELECT * FROM employees;
SELECT * FROM roles;
SELECT * FROM departments;

