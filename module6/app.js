let loading = 0;

while (loading < 100) {
    loading ++;
    console.log('Website loading...');
}


const names = ["Ham", "Cheese", "Bacon"];

let nameIndex = 0;

while (nameIndex < names.length) {
    const name = names[nameIndex];
     console.log(name);
     if (name === "Bacon") {
         console.log("Found the Bacon!");
         break;
     }
    nameIndex++;
}

const text = document.querySelector(".title");
const changecolor = document.querySelector(".changeColor");
let isChanged = false;

changecolor.addEventListener("click", function() {
    isChanged = !isChanged;
    text.style.color = isChanged ? "red" : "black";
    text.style.backgroundColor = isChanged ? "black" : "transparent";
    text.style.fontSize = isChanged ? "40px" : "32px";
    text.style.border = isChanged ? "10px solid red" : "none";
});


//name list

const userList = document.querySelectorAll(".name-list li"); //names
const listInput = document.querySelector(".list-input"); //write on btn


//grocery list click red

for(user of userList){
    user.addEventListener("click", function() {
       this.style.color = "red";
    });
}

console.log(listInput.value);

listInput.addEventListener("click", function() { 

const newLi = document.createElement("LI");
const liContent = document.createTextNode("sdf");
console.log(listInput.value);
});


//box btn 

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

