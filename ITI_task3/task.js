// task 1
var number = 18;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// task 2
var number = -7;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// task 3
var a = 15;
var b = 20;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// task 4
var a = 15;
var b = 40;
var c = 25;

if (a >= b && a >= c) {
    console.log("Largest number is: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest number is: " + b);
} else {
    console.log("Largest number is: " + c);
}
 
// task 5
var grade = 87;

switch (true) {
    case grade >= 90 && grade <= 100:
        console.log("A");
        break;

    case grade >= 80 && grade <= 89:
        console.log("B");
        break;

    case grade >= 70 && grade <= 79:
        console.log("C");
        break;

    case grade >= 60 && grade <= 69:
        console.log("D");
        break;

    case grade >= 50 && grade <= 59:
        console.log("E");
        break;

    default:
        console.log("F");
}

// task 6
var total = 1500;

if (total > 1000) {
    total = total - (total * 0.20);
} else if (total > 500) {
    total = total - (total * 0.10);
} else {
    total = total;
}

console.log(total);

// task 7
var a = 6;
var b = 8;
var c = 10;

if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}

// task 8
var num1 = 20;
var num2 = 5;
var operation = "*";

switch (operation) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("Invalid Operation");
}

// task 9
var age = 22;
var grade = 88;
var attendance = 91;
var hasID = true;

if (age >= 18 && grade >= 85 && attendance >= 80 && hasID === true) {
    console.log("Accepted");
} else {
    console.log("Rejected");
}