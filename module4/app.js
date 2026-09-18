//Conditional Statements

const age = 20;

if(age > 18) {
    console.log("You are an adult.");
} else if (age <15){
    console.log("You are a child.");
}
else {
    console.log("You are not an adult.");
}

const MyAge = 25;

const yourAge = 30;

console.log(MyAge + yourAge);

const isAgeInteger = Number.isInteger(age);
console.log(isAgeInteger);

if (yourAge > MyAge) {
    console.log("Your older than me.");
}

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("It is the start of the week.");
        break;
    case "Friday":
        console.log("The weekend is almost here.");
        break;
    default:
        console.log("It is another day of the week.");
}

//String Concatenation
const name = "cely";
const greeting = "Hello, my name is " + name + ".";
console.log(greeting);

const uppercaseName = name.toUpperCase();
console.log(uppercaseName);
