"use strict";

// Constructor.....
function Employee(employee_ID, full_Name, department, level, image_URL, salary){
    this.employee_ID = employee_ID;
    this.full_Name = full_Name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary = salary;
}

Employee.prototype.netSalary = function(){
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
    let randomSalary = (Math.random() * (maxSalary-minSalary) ) + minSalary;
    var netSalaryE = randomSalary - (randomSalary * (7.5/100));
    return Math.round(netSalaryE * 100) / 100;
    }

Employee.prototype.render = function(){
    document.write(`<h4 style="color: #B20600">${this.full_Name} Salary is equal to <h3>${this.netSalary()}$</h3></h4><hr>`);
}

let Ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new Employee(1005, "Hadi Ahmad", "Finance", "Mid-Senior");

Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();




