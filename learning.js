//variable declaration in javascript
//let , var, const
let favouritecolor='red'; // we use d keyword let for a variable that can change like my colour and age
var myname='Nwokolo victor';
const pi='3.142';//constant value doesnt change 
console.log(pi);
//data types in javascript
//string, number, boolean, null, undefined, object
//my name is a string anything that is a noun is a string
let myfriendname='Adedayo Elijah'; //string datatype
let myaccountbalance=25000000; //number datatype
let iswealth=true; //boolean datatype
// undefined datatype
let myphonenumber; //undefined datatype
//null datatype
let mymiddlename=null; //null datatype
// we can reassign values to let and var but not const
favouritecolor='blue';
myname='Ifeanyi John';
console.log(favouritecolor);
console.log(myname);
// multiplication in javascript
let num1=2;
let num2=4;
let multiplication=num1*num2;
console.log(multiplication);
// concatenation in javascript
let firstname="Nwokolo";
let lastname="victor";
let middlename="oluebubechukwu";
let fullname=firstname+" "+lastname+" "+middlename;
console.log(fullname); 

//OR 
let age=18;
let legalage=18;
let gender="female";
console.log(age >=legalage || gender =="male" && "i can drink alcholic")
//truthy and falsy values in javascript
//falsy values: false, 0, "", null, undefined, NaN
//truthy values: true, any number other than 0, any string with at least one character, [], {}

//AND operator in javascript
//console.log(age >=legalage && gender =="female")
//NOT operator in javascript
//console.log(!(age >=legalage))      

//OR operator in javascript
//console.log(age >=legalage || gender  =="male")
if(true){
    console.log("i am always true 😂😂");
}
//conditional statements in javascript
//if, else if, else
if(age >=legalage){
    console.log("i can drink alcholic");}
    else{
        console.log("i cannot drink alcholic");
    }
    //and operator
    if(age >=legalage && gender =="male"){
    console.log("i can drink alcholic");}
    else{
        console.log("i cannot drink alcholic");
    }

    //or operator
    if(age >=legalage || gender =="male"){
        console.log("i can drink alcholic");}   
        else{
            console.log("i cannot drink alcholic");
        }
        //not operator
        if(!(age >=legalage)){
            console.log("i cannot drink alcholic");}   
            else{
                console.log("i can drink alcholic");
            }

            //reference datatypes in javascript
            //array, object
            //array an array is a type of data that can hold multiple values or a data structure that can store a collection of values
            let studentInfo=['Nwokolo victor', 18, 'male'];
            console.log(studentInfo);
            console.log(studentInfo.length);//length of array
            let agearray=[18, 20, 22, 24, 26];
            console.log(agearray);
            console.log(agearray.push(100));//adding element to array
            console.log(agearray);
            console.log(agearray.unshift(16));//adding element to the beginning of array
            agearray.pop();//removing last element from array
            console.log(agearray);//removing last element from array
            agearray.shift();//removing first element from array
            console.log(agearray);//removing first element from array

            console.log(agearray[3]);//accessing array elements

            let fruits=['apple', 'banana', 'orange', 'mango'];
            console.log(fruits);
            console.log(fruits[2]);//accessing array elements

            //object
            let person={
                name:'Nwokolo victor',
                age:18,
                gender:'male'
            };
            console.log(person);
            console.log(person.name);//accessing object properties
            console.log(person['age']);//accessing object properties
            // we can modify object properties
            person.age=123456;
            console.log("You Update your age to :",person.age);
            // we can also add new properties to an object
            person.country="Nigeria";
            console.log(person);
            console.log(person.country);//accessing new object property
            // we can also delete properties from an object
            delete person.country;
            console.log(person);




