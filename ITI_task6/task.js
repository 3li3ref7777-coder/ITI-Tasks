// task 1
function printOddNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOddNumbers(1, 10);


// task 2
let tips = [
    "Use let and const instead of var.",
    "Always use meaningful variable names.",
    "Use === instead of == for comparison.",
    "Functions help you reuse your code.",
    "Arrays are used to store multiple values.",
    "Use comments to explain your code.",
    "Use console.log() to test your code.",
    "Use loops to repeat code efficiently.",
    "Objects store data using key-value pairs.",
    "Practice JavaScript regularly to improve your skills."
];

let randomIndex = Math.floor(Math.random() * tips.length);

document.write("<h2>Tip of the day</h2>");
document.write("<p>" + tips[randomIndex] + "</p>");



// task 3
function calculate(expression) {
    let result = eval(expression);

    alert("You entered: " + expression + ", and the result is: " + result);
}

function askExpression() {
    let expression = prompt("Enter a math expression:");

    calculate(expression);
}

// task 4
let students = [
    { Name: "Ali", Degree: 95 },
    { Name: "Ahmed", Degree: 55 },
    { Name: "Mona", Degree: 88 },
    { Name: "Sara", Degree: 45 },
    { Name: "Omar", Degree: 72 }
];


let student = students.find(function (student) {
    return student.Degree >= 90 && student.Degree <= 100;
});

console.log("Student between 90 and 100:", student.Name);



let lowStudents = students.filter(function (student) {
    return student.Degree < 60;
});

console.log("Students with degree less than 60:");

lowStudents.forEach(function (student) {
    console.log(student.Name);
});



students.push({ Name: "Youssef", Degree: 91 });



console.log("All students using for...in:");

for (let index in students) {
    console.log(students[index].Name, students[index].Degree);
}



students.pop();



console.log("All students using for...of:");

for (let student of students) {
    console.log(student.Name, student.Degree);
}



students.sort(function (a, b) {
    return a.Name.localeCompare(b.Name);
});

console.log("Students sorted alphabetically:");

for (let student of students) {
    console.log(student.Name, student.Degree);
}



students.splice(2, 0,
    { Name: "Khaled", Degree: 80 },
    { Name: "Nour", Degree: 92 }
);

console.log("After adding 2 students:");

for (let student of students) {
    console.log(student.Name, student.Degree);
}



students.splice(3, 1);

console.log("After removing 1 student:");

for (let student of students) {
    console.log(student.Name, student.Degree);
}