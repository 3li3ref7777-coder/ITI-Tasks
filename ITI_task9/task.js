// task 1

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); 
console.log(b); 




// task 2

function getMinMax(...numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    return [min, max];
}

let numbers = [10, 50, 20, 90, 30, 5];

let [min, max] = getMinMax(...numbers);

console.log("Min =", min);
console.log("Max =", max);






// task 3

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


let allStrings = fruits.every(function (fruit) {
    return typeof fruit === "string";
});

console.log("All elements are strings:", allStrings);



let startsWithA = fruits.some(function (fruit) {
    return fruit.startsWith("a");
});

console.log("Some elements start with 'a':", startsWithA);



let filteredFruits = fruits.filter(function (fruit) {
    return fruit.startsWith("b") || fruit.startsWith("s");
});

console.log("Filtered fruits:", filteredFruits);


let likedFruits = filteredFruits.map(function (fruit) {
    return "I like " + fruit;
});

console.log(likedFruits);



likedFruits.forEach(function (fruit) {
    console.log(fruit);
});


// task 4
function getPositiveNumbers(numbers) {
    return numbers.filter(function (number) {
        return number > 0;
    });
}

let numbers1 = [-5, 10, -3, 8, 0, 15, -2];

let positiveNumbers = getPositiveNumbers(numbers1);

console.log(positiveNumbers);


// task 5
function getSum(numbers) {
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}

let numbers2 = [10, 20, 30, 40];

let result = getSum(numbers2);

console.log(result); 


// task 6
function capitalizeNames(names) {
    return names.map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
}

let names = ["ali", "ahmed", "mohamed", "sara"];

let capitalizedNames = capitalizeNames(names);

console.log(capitalizedNames);



// task 7
function checkLowerCase(str) {
    if (str === str.toLowerCase()) {
        console.log("This sentence is lower case");
    } else {
        console.log("This sentence is not lower case");
    }
}

checkLowerCase("hello world");
checkLowerCase("Hello World");



// task 8
let filterByLength = (strings, length) => {
    return strings.filter(str => str.length > length);
};

let names1 = ["Ali", "Ahmed", "Mohamed", "Omar", "Abdullah"];

let result1 = filterByLength(names1, 4);

console.log(result1);