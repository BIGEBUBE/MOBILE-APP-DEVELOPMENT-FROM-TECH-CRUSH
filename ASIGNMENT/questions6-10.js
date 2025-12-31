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