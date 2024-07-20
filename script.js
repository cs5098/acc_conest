const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  employees.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

function ConcatinateArray() {
  const newEmployees = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    { id: 7, name: "charlie", age: "21", profession: "developer" }
  ];
  const concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}

// Call the functions to test
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatinateArray();


