// task 1
alert("Welcome to my site");

let name = prompt("Enter your name:");

document.write("Welcome " + name + " to my site" + "<br>");


// task 2
function checkTemperature(temperature) {
    let result = temperature >= 30 ? "HOT" : "Cold";
    document.write("The temperature is: " + result + "<br>");
}

checkTemperature(35);

// task 3 
let name1;

while (true) {
    name1 = prompt("Enter your name:");

    if (name1 !== "" && isNaN(name1)) {
        break;
    }
    alert("Please enter a valid name.");
}

let birthYear;

while (true) {
    birthYear = prompt("Enter your birth year:");

    if (!isNaN(birthYear) && birthYear < 2010) {
        break;
    }
    alert("Please enter a valid birth year less than 2010.");
}

let year = 2026;
let age = year - Number(birthYear);

document.write("Name: " + name1 + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Age: " + age);



// task 4
function welcome() {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Welcome to my page</h" + i + ">");
    }
}

welcome();