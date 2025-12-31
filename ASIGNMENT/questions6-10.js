//assignment 6 to 10
//6. Create a variable score with value 75. 
// Write code that prints "Pass" if score is 50 or above, otherwise print "Fail". 
let score=75;
if(score>=50){
    console.log("You passed");
}else{console.log("you failed");}
//7. Declare two variables a and b with values 12 and 15.
//  Write code to check if a is greater than b and print an appropriate message. 
let a=12;
let b=15;
if(a>b){
    console.log(a,"is greater than",b);
}else{console.log(b,"greater than",a);}
//8. Create a variable age with value 16. 
// Write code that checks if the person can vote (age 18 or above) and print "Can vote" or "Cannot vote". 
let age = 16;
if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}
//9. Declare a variable isWeekend with value true. Write code that prints "No work today!" 
// if it's weekend, otherwise print "Time to work!". 
let isWeekend = true;
if (isWeekend) {
    console.log("No work today!");
} else {
    console.log("Time to work!");
}
// 10. Create a variable num with value 24. Write code to check if the number is even or odd and print the result. 

let num = 24;
if (num % 2 === 0) {
    console.log(num, "is an Even number.");
} else {
    console.log(num, "is an Odd number.");
}
//11. Write code that takes a variable marks (value 85) and assigns a grade based on: 
//90-100: A, 80-89: B, 70-79: C, 60-69: D, below 60: F. Print the grade.
let marks = 85;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("With a score of ",marks ," your grade is:",grade);
//12. Create variables for length and width of a rectangle (values 5 and 10). Calculate and print both the area and perimeter.
let length = 5;
let width = 10;
let area = length * width;
let perimeter = 2 * (length + width);
console.log("The Area of the rectangle is:", area);
console.log("The Perimeter of the rectangle is:", perimeter);