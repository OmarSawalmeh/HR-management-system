"use strict"

let tableEl = document.getElementById("tableID");
let sec = document.getElementById("sect");

function getData(){
    let retriveData = localStorage.getItem("employees");
    let arrayData =  JSON.parse(retriveData);
    return arrayData;
}

var allData = getData();

function createTable(){
 
    let totalSalaryAdmin = 0
    let countAdmin = 0

    let totalSalaryFinance = 0
    let countFinance = 0

    let totalSalaryMarketing = 0
    let countMarketing = 0

    let totalSalaryDevelopment = 0
    let countDevelopment = 0
    allData.forEach(element => {

        let depart = element['department'].charAt(0).toUpperCase() + element['department'].slice(1);
        if(depart == "Administration"){
            totalSalaryAdmin += element["salary"];
            countAdmin += 1;
        }
        else if(depart == "Finance"){
            totalSalaryFinance += element["salary"];
            countFinance += 1;
        }
        else if(depart == "Marketing"){
            totalSalaryMarketing += element["salary"];
            countMarketing += 1;
        }
        else if(depart == "Development"){
            totalSalaryDevelopment += element["salary"];
            countDevelopment += 1;
        }        
    });

    let avgSalaryAdmin = (Math.round(totalSalaryAdmin * 100) / 100)/countAdmin; 
    let avgSalaryFinance = totalSalaryFinance/countFinance; 
    let avgSalaryMarketing = totalSalaryMarketing/countMarketing; 
    let avgSalaryDevelopment = totalSalaryDevelopment/countDevelopment; 

    console.log(totalSalaryAdmin, countAdmin, avgSalaryAdmin);
    console.log(totalSalaryFinance, countFinance, avgSalaryFinance);
    console.log(totalSalaryMarketing, countMarketing, avgSalaryMarketing);
    console.log(totalSalaryDevelopment, countDevelopment, avgSalaryDevelopment);

    let departName = ["Administration", "Finance", "Marketing", "Development"];
    let totalSalaries = [totalSalaryAdmin, totalSalaryFinance, totalSalaryMarketing, totalSalaryDevelopment];
    let countDepart = [countAdmin, countFinance, countMarketing, countDevelopment];
    let avgSalaries = [avgSalaryAdmin, avgSalaryFinance, avgSalaryMarketing, avgSalaryDevelopment];
    for (let index = 0; index < totalSalaries.length; index++) {
        let tr = document.createElement("tr");
        tableEl.appendChild(tr);
    
        let nameTd = document.createElement("td");
        nameTd.textContent = departName[index];
        tr.appendChild(nameTd);
    
        let numberTd = document.createElement("td");
        numberTd.textContent = countDepart[index];
        tr.appendChild(numberTd);
    
        let avgSalaryTd = document.createElement("td");
        avgSalaryTd.textContent = (Math.round(avgSalaries[index] * 100) / 100);
        tr.appendChild(avgSalaryTd);
    
        let totSalaryTd = document.createElement("td");
        totSalaryTd.textContent = totalSalaries[index];
        tr.appendChild(totSalaryTd);
    }
    let tf = document.createElement("tfoot");
    tableEl.appendChild(tf);

    let nameTd = document.createElement("td");
    nameTd.textContent = departName.length;
    tf.appendChild(nameTd);

    let numberTd = document.createElement("td");
    let sum = 0;
    for (let i = 0; i < countDepart.length; i++) {
        sum += countDepart[i];
    }
    numberTd.textContent = sum;
    tf.appendChild(numberTd);

    let avgSalaryTd = document.createElement("td");
    let sumation = 0;
    for (let i = 0; i < countDepart.length; i++) {
        sumation += avgSalaries[i];
    }
    avgSalaryTd.textContent = (Math.round(sumation * 10) / 10)/avgSalaries.length;
    tf.appendChild(avgSalaryTd);


    let totSalaryTd = document.createElement("td");
    let tot = 0;
    for (let i = 0; i < countDepart.length; i++) {
        tot += totalSalaries[i];
    }
    totSalaryTd.textContent = tot;
    tf.appendChild(totSalaryTd);
}


var s = createTable();
//console.log(s);


















// var myObj = {
//     department : [],
//     numInDepart : [],
//     totalSalaryInDepart : [],
//     avgSalaryInDepart : []
// }

// myObj["department"].includes(5);
// myObj["department"].indexOf();

// myObj["department"].push("ss");

// var myObj = {
//     department : [],
//     numInDepart : [0, 0, 0, 0],
//     totalSalaryInDepart : [0, 0, 0, 0],
//     avgSalaryInDepart : [0, 0, 0, 0]
// }
// console.log(myObj);

//         console.log("WWW" + typeof element['salary']);
//         let tr = document.createElement("tr");
//         tableEl.appendChild(tr);
//         let nameTd = document.createElement("td");
//         let depart = element['department'].charAt(0).toUpperCase() + element['department'].slice(1);
//         if(myObj["department"].includes(depart) == true){
//             let index = myObj["department"].indexOf(depart);
//             myObj["numInDepart"][index] += 1;
//             if (element['salary'] != null && typeof element['salary'] == "Number") {
//                 myObj["totalSalaryInDepart"][index] += element['salary'];

//             }
//         }
//         else{
//             let index = myObj["department"].indexOf(depart);
//             myObj["department"].push(depart);
//             myObj["numInDepart"][index] += 1;
//             if (element['salary'] != null) {
//                 myObj["totalSalaryInDepart"][index] += element['salary'];

//             }
//         }
//         // nameTd.textContent = depart;
//         // tr.appendChild(nameTd);