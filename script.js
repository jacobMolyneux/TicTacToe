

const player = (name, icon) =>{
    const sayHello = () => console.log(`Hello ${player.name}`);
    return {sayHello, name, icon}
}
let i = 0;
const gameBoard = (player1, player2) => {
    const gameDisplay = document.getElementById('container');
    const startGame = () => {
        console.log("start game has started! But the loop has not started yet");
        for(let i = 0; i < 9; i++){
            console.log("the loop has started!");
            const gameDisplay = document.getElementById('container');
            console.log("container has been retrieved");
            const box = document.createElement('div');
            console.log("the box has been created!");
            box.classList = 'box';
            console.log("the class list has been created");
            box.addEventListener('click', function(){
                
                console.log("the event listener is being added.")
                
                if(i%2 == 0){
                box.textContent = player1.icon;
                i++;
                }
                
                else{
                    box.textContent = player2.icon;
                    i++;
                }
                console.log(`the value of i is: ${i}`);
                
            });
            gameDisplay.appendChild(box);
            console.log("box is being appended!");
        };
    };
    return {gameDisplay, startGame};
    
}
player1 = player('jacob', "X");
player2 = player('bob', "O");
NewGame = gameBoard(player1, player2);
NewGame.startGame();

