const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeesDB"
});

connection.connect(function(error){
  if (error) throw error;
  start()
});

function start(){
  inquirer.prompt({
    name: "action",
    type: "list",
    message:"What would you like to add to you db?",
    choices:[
      "View All employees",
      "View All Roles",
      "View All Departments",
//employee
      "Add employee",
      "Update employee",
      "Delete employee",
//manager
      "View employees by manager"
    ]
  }).then( function(answer){
    switch (answer.action) {
      //employees
      case 'View all Employees':
        return viewEmployees();
        case 'View employee by department':
          return viewbyDepartment();
          case 'View employee by role':
            return viewbyRole();

      case 'Add Employee':
        return addEmployees();
      case 'Update Employee':
        return updateEmployee();
      case 'Delete Employee':
        return removeEmployee();
      //roles
        case 'View all Roles':
          return viewRoles();
      //department
      case 'View all Departments':
        return viewDepartments();
  case 'Close':
    connection.end();    
  }
  });
}
function viewEmployees(){
  connection.query("SELECT * FROM employee", function (error, data) {
    console.table(data);
    start();
})
}
function viewDepartments(){
  connection.query("SELECT * FROM department", function (error, data) {
    console.table(data);
    start();
})

}
function addEmployees(){
  inquirer.prompt()[
    {
      name: "first_name",
      Type: "Input",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      Type: "Input",
      message: "What is the employee's last name?"
  },
  {
      name: "role_id",
      Type: "Input",
      message: "What is the employee's role?"
  }]
}
then(function(res)
{
connection.query('INSERT INTO employee(first_name, last_name, role_id) VALUES (?)' [res.first_name, res.last_name, res.role_id], function(error, data){
  if (error) throw error;
  console.table("inserted");
  start();
})
})
function updateEmployee(){
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "what employee would you want to update?",
    },
    {
      name: "role_id",
      type: "Number",
      message: "Enter new role ID to update"
    }
  ]).then(function (response){
    connection.query('UPDATE employee SET role_id=? WHERE first_name=?' [response.role_id, response.first_name], 
    function (error, data){
      console.table(data);
      start();
    })
  })
}
  