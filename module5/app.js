const names = ["Aracely", "Cely", "cel"];

for (const name of names) { 
     console.log(name);
     if (name === "cel") {
         console.log("Found cel!");
         break;
     }
}

let loading = 0;

while (loading < 100) {
    loading ++;
    console.log('Website loading...');
}

    //2nd video 

const text = document.querySelector(".title");
const changecolor = document.querySelector(".changeColor");

changecolor.addEventListener("click", function() {
    text.classList.toggle('change');
});


//name list

const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");

for(user of userList){
    user.addEventListener("click", function() {
       this.style.color = "red";
    });
}

console.log(listInput.value);
