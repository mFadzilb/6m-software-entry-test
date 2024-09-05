/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/

// Task 1: Declare an array to store patient's names
let patients = [];

function addPatient(patientName) {
  // Task 2: Add patient's name to the array
  patients.push(patientName);
}

// Task 3: List all patients
function listPatients() {
  console.log(patients);
}

// Add patients
addPatient("John");
addPatient("Mary");
addPatient("Mark");

// List patients
listPatients(); // This should list ["John", "Mary", "Mark"]