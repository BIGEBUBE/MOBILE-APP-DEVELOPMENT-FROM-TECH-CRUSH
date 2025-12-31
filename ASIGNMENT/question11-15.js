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
//13. Write code with a variable year (value 2024). Check if it's a leap year or not. (Leap year: divisible by 4, but if divisible by 100, must also be divisible by 400). Print the result. 
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a Leap Year.");
} else {
    console.log(year, "is NOT a Leap Year.");
}
//14. Create a variable number with value 47.
//  Write code that checks if the number is divisible by both 3 AND 5,
//  just by 3, just by 5, or by neither. Print appropriate messages for each case. 
// 14. Check divisibility by 3 and 5
let number = 47;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number, "is divisible by both 3 and 5.");
} else if (number % 3 === 0) {
    console.log(number, "is divisible by 3 only.");
} else if (number % 5 === 0) {
    console.log(number, "is divisible by 5 only.");
} else {
    console.log(number, "is not divisible by 3 or 5.");
}
//15. Write code with three variables: subject1, subject2, subject3 containing marks 
//(values 78, 85, 92). Calculate the average and print "Excellent" if average >= 90, "Good" if >= 75, "Average" if >= 60, otherwise "Needs improvement". 
// 15. Average marks and performance rating
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;
// Step 1: Calculate the average
let average = (subject1 + subject2 + subject3) / 3;
// Step 2: Check the rating
if (average >= 90) {
    console.log("Average Score:", average, "- Excellent");
} else if (average >= 75) {
    console.log("Average Score:", average, "- Good");
} else if (average >= 60) {
    console.log("Average Score:", average, "- Average");
} else {
    console.log("Average Score:", average, "- Needs improvement");
}
