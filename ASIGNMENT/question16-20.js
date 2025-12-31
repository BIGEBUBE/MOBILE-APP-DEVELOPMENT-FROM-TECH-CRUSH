//16. Create a variable character with value "A". 
// Write code to check if it's an uppercase letter, lowercase letter, or neither (you can assume it's a single character). Print the result. 
let character="a"
if (character === character.toUpperCase() && character !== character.toLowerCase()) {
    console.log("It is Uppercase");
}else { console.log("It is lowercase");}