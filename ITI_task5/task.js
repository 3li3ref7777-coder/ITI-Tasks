// task 1
//  1. Calculate the area of a circle

let radius = prompt("What is the value of your circle's radius?");
let area = Math.PI * Math.pow(radius, 2);

alert("Total area of the circle is " + area);


// // 2. Calculate the square root

let number = prompt("What is the value you want to calculate its square root?");
let squareRoot = Math.sqrt(number);

alert("Square root of " + number + " is " + squareRoot);


// // 3. Calculate the cosine of an angle

let angle = prompt("What is the angle you want to calculate its cos value?");

let radians = angle * Math.PI / 180;
let cosValue = Math.cos(radians);

document.write("COS " + angle + "° is " + cosValue.toFixed(4));


// task 2


 let fullName;
 let validName;

 do {
    fullName = prompt("Enter your Full Name:");

     validName = true;

     if (fullName === null || fullName.trim() === "") {
         validName = false;
     } else {
        let name = fullName.trim();
        let parts = name.split(" ");

         for (let i = 0; i < parts.length; i++) {

             if (parts[i].length < 3) {
                 validName = false;
             }

             for (let j = 0; j < parts[i].length; j++) {
                 let char = parts[i].charAt(j);

                if (!((char >= "A" && char <= "Z") ||
                       (char >= "a" && char <= "z"))) {
                    validName = false;
                }
             }
         }
     }

     if (!validName) {
         alert("Invalid Full Name! Please enter a correct name.");
     }

 } while (!validName);

 alert("Valid Full Name");


 let email;
 let validEmail;

 do {
     email = prompt("Enter your Email:");

     validEmail = true;

     if (email === null || email.trim() === "") {
         validEmail = false;
     } else {
         email = email.trim();

         let atIndex = email.indexOf("@");
         let dotIndex = email.lastIndexOf(".");

         if (atIndex <= 0 ||
             dotIndex <= atIndex ||
            dotIndex >= email.length - 1 ||
            email.includes(" ")) {
             validEmail = false;
         }

       let domain = email.substring(email.indexOf("@") + 1);

          if (!domain.endsWith(".com.eg")) {
             validEmail = false;
          }
     }

    if (!validEmail) {
        alert("Invalid Email! Please enter an Egyptian email.");
   }

 } while (!validEmail);

alert("Valid Email");


// task 3

let grades = [60, 100, 10, 15, 85];

grades.sort((a, b) => b - a);

console.log("Sorted grades:", grades);

let highestDegree = grades.find(grade => grade <= 100);

console.log("Highest degree:", highestDegree);


let below60 = grades.filter(grade => grade < 60);

console.log("Grades below 60:", below60);
