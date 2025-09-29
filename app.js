// -- Question 01 --
// function tellTime() {
//   var now = new Date();
//   alert("Today: " + now);
// }
// tellTime();

// -- Question 02 --
// function greetByUserName(){
// var fName = prompt("Enter your first name :");
// var LName = prompt("Enter your last name :");
// var fullName = fName + " " + LName; ;
// alert("Hello, " + fullName + "!");
// }
// greetByUserName();

// -- Question 03 --
// function addTwoNumbers() {
//   var num1 = parseInt(prompt("Enter the first number:"));
//   var num2 = parseInt(prompt("Enter the second number:"));
//   var sum = num1 + num2;
//   return sum;
// }
// var result = addTwoNumbers();
// alert("The sum is: " + result);

// -- Question 04 --
// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     console.log(num1 + num2);
//   } else if (operator === "-") {
//     console.log(num1 - num2);
//   } else if (operator === "/") {
//     console.log(num1 / num2);
//   } else if (operator === "*") {
//     console.log(num1 * num2);
//   } else {
//     alert("Invalid Operator");
//   }
// }
// var userValue1 = Number(prompt("Enter num1"));
// var userValue2 = Number(prompt("Enter num2"));
// var userOpr = prompt("Enter operator  (+, -, *, /):");
// calculator(userValue1, userValue2, userOpr);

// ----QUE 05----
// function square(num) {
//   return num * num;
// }
// var userValue = Number(prompt("Enter a number:"));
// var result = square(userValue);
// document.write("Square of " + userValue + " is " + result);

// ----QUE 06----
// function factorial(n) {
//   var result = 1;
//   for (var i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// var userValue = Number(prompt("Enter a number:"));
// var result = factorial(userValue);
// document.write("Factorial of " + userValue + " is " + result);

// ----QUE 07----
// function displayCounting(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// var startNum = Number(prompt("Enter the start number:"));
// var endNum = Number(prompt("Enter the end number:"));
// displayCounting(startNum, endNum);

// ----QUE 08----
// function calculateHypotenuse(base, perp) {
//   function square(num) {
//     return num * num;
//   }
//   var hypotenuse = Math.sqrt(square(base) + square(perp));
//   return hypotenuse;
// }
// var base = Number(prompt("Enter the base:"));
// var perp = Number(prompt("Enter the perpendicular:"));
// var result = calculateHypotenuse(base, perp);
// document.write("Hypotenuse of the triangle is: " + result);

// ----QUE 09----
// function calculateArea(width, height) {
//   return width * height;
// }
// var area1 = calculateArea(5, 10);
// document.write("Area of rectangle (values passed): " + area1 + "<br>");
// var w = 7;
// var h = 4;
// var area2 = calculateArea(w, h);
// document.write("Area of rectangle (variables passed): " + area2);

// ----QUE 10----
// function isPalindrome(str) {
//   var cleanStr = str.toLowerCase().replace(/\s+/g, "");
//   var reversedStr = cleanStr.split("").reverse().join("");
//   return cleanStr === reversedStr;
// }
// var userInput = prompt("Enter a word:");
// if (isPalindrome(userInput)) {
//   document.write(userInput + " is a palindrome");
// } else {
//   document.write(userInput + " is not a palindrome");
// }

// ----QUE 11----
// function capitalizeWords(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// var input = "the quick brown fox";
// var output = capitalizeWords(input);
// document.write("Original String: " + input + "<br>");
// document.write("Converted String: " + output);

// ----QUE 12----
// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longestWord = words[0];

//   for (var i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// var input = "Web Development Tutorial";
// var result = findLongestWord(input);
// document.write("Example String: " + input + "<br>");
// document.write("Longest Word: " + result);

// ----QUE 13----    // "with chatgpt" :
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputString = "JSResourceS.com";
// var inputLetter = "o";
// var result = countOccurrences(inputString, inputLetter);

// document.write("String: " + inputString + "<br>");
// document.write("Letter: " + inputLetter + "<br>");
// document.write("Occurrences: " + result);

// ----QUE 14---- 
// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   document.write("The area is " + area.toFixed(2));
// }
// var r = Number(prompt("Enter the radius of the circle:"));
// calcCircumference(r);
// calcArea(r);

// THE END //
