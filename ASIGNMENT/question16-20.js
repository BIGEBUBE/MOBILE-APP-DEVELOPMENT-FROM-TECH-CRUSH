//16. Create a variable character with value "A". 
// Write code to check if it's an uppercase letter, lowercase letter, or neither (you can assume it's a single character). Print the result. 
let character="a"
if (character === character.toUpperCase() && character !== character.toLowerCase()) {
    console.log("It is Uppercase");
}else { console.log("It is lowercase");}
//17. Write code with variables age (value 25) and hasLicense (value true). 
// A person can drive only if they are 18 or older AND have a license. Print whether they can drive or not. 
// 17. Driving Eligibility Check
let age = 25;
let hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log("Status: Can drive");
} else {
    console.log("Status: Cannot drive");
}
//18. Create a variable totalAmount with value 1000 and isMember with value true. 
// If the person is a member, apply a 20% discount, otherwise 5% discount. Calculate and print the final amount. 
let totalAmount = 1000;
let isMember = true;
let finalAmount;
if (isMember) {
    finalAmount = totalAmount - (totalAmount * 0.20);
    console.log("Member detected! You saved 20%.");
} else {
    finalAmount = totalAmount - (totalAmount * 0.05);
    console.log("Not a member. You saved 5%.");
}
console.log("Your final amount is:", finalAmount);
//19. Write code with a variable number (value 15).
//  Print all numbers from 1 to that number, but only print numbers divisible by 3. 
let number = 15;
for (let i = 1; i <= number; i++) {
    // Check if the current number (i) is divisible by 3
    if (i % 3 === 0) {
        console.log(i);
    }
}