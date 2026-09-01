
//new way of code
// I created mathematical operations on variables, it is also a global variable since its at the top of the file   
let x = 100;
let life = 100; // this is a player's life variable in a video game NUMBERS\
 life = life - 10;
 life = life /20; //= 4.5

let name = 'player one'; // this is a player's name variable in the game STRINGS VARIABLES
{
    let y = 50; //block scope variable cant be accessed outside this block
}

//CONSTANT OBJECT
/*Create an object*/
const player = {type:"Fiat", model:"500", color:"white"};

player.color = "red"; // Change a property:
player.owner = "Aracely"; // property:
document.getElementById("demo").innerHTML = "This player's name is " + player.owner;







console.log(life);
document.write('Module2');