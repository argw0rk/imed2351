const name = 'Module 3';
const youtuber = 'Aracely';

function adder(mod1, mod2 , mod3){
console.log(mod1 + mod2 + mod3);
}
adder(5,10,15);

function toUpper(text) {
const unpperCased = text.toUpperCase();
console.log(unpperCased);
}
toUpper(name);
toUpper(youtuber);
 //* Everything above is from the Youtube video*//

 //Objects properties and methods
 const person = {
  firstname: "Aracely",
  lastname: "Garcia",
  month: "September",
  day: 8,
  year: 2026,
  paragraph: "Click this paragraph to see an alert message.",
  fullName: function () {
    return this.firstname + " " + this.lastname;    //method 
  }
};

console.log(person.fullName());

document.getElementById("demo").innerHTML = " Todays date is " + person["month"] + " " + person["day"] + ", " + person["year"] + " and the person who worked on this script is " + person["firstname"] + " " + person["lastname"] + ". " + person["paragraph"];

//Event listener for the paragraph
document.getElementById("demo").addEventListener("click", function () {
  alert("You clicked the paragraph! :D");
});
