// Array and method
const schedule = [
    { day: "Monday", time: "9:00 AM", activity: "Meeting" },
    { day: "Tuesday", time: "10:00 AM", activity: "Workshop" },
    { day: "Wednesday", time: "11:00 AM", activity: "Presentation" }
];

schedule.push({ day: "Thursday", time: "2:00 PM", activity: "Review" });
schedule.unshift({ day: "Sunday", time: "1:00 PM", activity: "Rest" });

console.log(schedule);


const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

// Object
const person = {
  firstName: "freddy",
  lastName: "fazbear",
  age: 50,
  likes: ["pizza", "sushi"],
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//  Method
person.name = function() {
  return this.firstName + " " + this.lastName;
};

// Display Object 
const demo = document.getElementById("demo");
demo.textContent = "Five night at Freddy's: " + person.fullName();