"use strict";

// Constructor.....
let allEmployees = []
var emplIDGlobal = 0;
function Employee(employee_ID, full_Name, department, level, image_URL){
    this.employee_ID = employee_ID;
    this.full_Name = full_Name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary = this.newSalary();
    

    emplIDGlobal = this.employee_ID;
    allEmployees.push(this);
}
 

Employee.prototype.newSalary = function(){
    let minSalary;
    let maxSalary;
    if (this.level == "Senior"){
        minSalary = 1500;
        maxSalary = 2000;
    }
    else if(this.level == "Mid-Senior"){
        minSalary = 1000;
        maxSalary = 1500;
    }
    else if(this.level == "Junior"){
        minSalary = 500;
        maxSalary = 1000;
    }
    let randomSalary = ( Math.random() * (maxSalary-minSalary) ) + minSalary;
    var netSalary = randomSalary - (randomSalary * (7.5/100));
    this.salary = Math.round(netSalary * 100) / 100;
    return this.salary;
}


Employee.prototype.createUniqueID = function(){
    let n1 = Math.floor((Math.random()*10));
    let n2 = Math.floor((Math.random()*10));
    let n3 = Math.floor((Math.random()*10));
    let n4 = Math.floor((Math.random()*10));

    let idNumber = `${n1}${n2}${n3}${n4}`;
        return idNumber;
}
    


let sectionEl = document.getElementById("cardSection");
Employee.prototype.render = function(){

    let image = document.createElement("img");
    image.src = this.image_URL;
    image.style.width = "300px";
    image.style.height = "300px";
    sectionEl.appendChild(image);

    let fullName = document.createElement("h3");
    fullName.textContent = this.full_Name;
    fullName.style.marginLeft = "5rem";
    fullName.style.color = "#B20600";
    sectionEl.appendChild(fullName);

    let employeeID = document.createElement("h5");
    employeeID.textContent = ` ID: ${this.employee_ID}`;
    employeeID.style.marginLeft = "6rem";
    employeeID.style.color = '#006778';
    sectionEl.appendChild(employeeID);

    let department = document.createElement("h3");
    department.textContent = `Department: ${this.department}`;
    department.style.marginLeft = "1rem";
    department.style.color = '#006778';
    sectionEl.appendChild(department);

    let level = document.createElement("h3");
    level.textContent = `Level: ${this.level}`;
    level.style.marginLeft = "4rem";
    level.style.color = '#006778';
    sectionEl.appendChild(level);

    let uniqueID = document.createElement("h5");
    uniqueID.textContent = this.createUniqueID();
    uniqueID.style.marginLeft = "6.25rem";
    uniqueID.style.color = '#006778';
    sectionEl.appendChild(uniqueID);

    let salaries = document.createElement("h5");
    salaries.textContent = this.salary;
    salaries.style.marginLeft = "6.25rem";
    salaries.style.color = "red";
    sectionEl.appendChild(salaries);

    // document.write(`<h4 style="color: #B20600">${this.full_Name} Salary is equal to <h3>${this.netSalary()}$</h3></h4><hr>`);
}

let Ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg", this.netSalary);
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
let Safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");

for (let index = 0; index < allEmployees.length; index++) {
    allEmployees[index].render();
}


// Task 8 ----->

let formEl = document.getElementById("formID");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.imageUrl.value;
    let salary  = event.target.salary.value;

    let cuurent_ID = emplIDGlobal + 1;
    let newEmployee = new Employee(cuurent_ID, fullName, department, level, imageUrl, 1000);
    newEmployee.render();

    // Save To Local Storge...
    saveData(allEmployees);
}

// TAsk 9 ---> .....
// Function Save To Local Storge..
function saveData(data){
    let stringifyData = JSON.stringify(data);
    localStorage.setItem("employees", stringifyData)
}

// Function Get And Save Data From Local Storge Then Render It To Create And Interactive Website...
function getData(){
    let retriveData = localStorage.getItem("employees");
    let arrayData =  JSON.parse(retriveData);

    if(arrayData != null){
        for (let i = allEmployees.length; i < arrayData.length; i++) {
            let cuurent_ID = emplIDGlobal + 1;
            let newEmp = new Employee(cuurent_ID, arrayData[i].full_Name, arrayData[i].department, 
                                        arrayData[i].level, arrayData[i].image_URL, 1000);
            newEmp.render();
        }
    }
}
getData();
//localStorage.clear();