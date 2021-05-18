const gameDisplay = document.getElementById('container');
// array that will hold the player positions
let selections = [];
// add boxes that to game Display
let i;
for(i = 0; i < 9; i++){
    const box = document.createElement('div');
    box.classList = 'Box';
    box.addEventListener("click", function(){
            box.textContent = "O"; 
        
    });
    gameDisplay.appendChild(box);
}


// Creating a player object using factory functions
const player = (name, color) => {
    const sayHello = () => console.log("hello!"); 
    return { name, color, sayHello};
    
    
}; 
const jacob = player("jacob", "red"); 
console.log(jacob.name);
jacob.sayHello();

const box = document.getElementsByClassName('Box');
const ClearButton = document.getElementById('clearButton');

ClearButton.addEventListener("click", function(){
    let box = document.getElementsByClassName('Box');
    box.style.background = "white";
})

