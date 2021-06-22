const player = (name, icon) => {
  const sayHello = () => console.log(`Hello ${player.name}`);
  return { sayHello, name, icon };
};

function winnerCheck(gameArray) {
  winningArrays = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
  ];
  let intGameArray = gameArray.map(Number);
}

let i = 0;
let boxArray = ["", "", "", "", "", "", "", "", ""];
let player1Moves = [];
let player2Moves = [];

const gameBoard = (player1, player2) => {
  const gameDisplay = document.getElementById("container");

  const startGame = () => {
    let clickCounter = 0;
    let i = -1;
    createBox = () => {
      const gameDisplay = document.getElementById("container");
      const box = document.createElement("div");
      box.classList = "box";
      i++;
      box.setAttribute("id", i);
      console.log(boxArray);
      box.addEventListener("click", function () {
        if (clickCounter % 2 == 0) {
          box.textContent = player1.icon;
          clickCounter++;
          boxArray.splice(box.id, 1, box.textContent);
          console.log(boxArray);
          player1Moves.push(box.id);
          player1Moves.map(Number);
          winnerCheck(player1Moves);

          console.log("player 1 moves are " + player1Moves.sort());
        } else {
          box.textContent = player2.icon;
          boxArray.splice(box.id, 1, box.textContent);
          console.log(boxArray);
          clickCounter++;
          player2Moves.push(box.id);
          player2Moves.map(Number);
          winnerCheck(player2Moves);
          console.log("player2 moves are " + player2Moves.sort());
        }
      });
      gameDisplay.appendChild(box);
    };
    boxArray.map(createBox);

    const Player1NameDiv = document.getElementById("player1Name");
    Player1NameDiv.textContent = player1.name;
    const Player1IconDiv = document.getElementById("player1Icon");
    Player1IconDiv.textContent = player1.icon;

    const Player2NameDiv = document.getElementById("player2Name");
    Player2NameDiv.textContent = player2.name;
    const Player2IconDiv = document.getElementById("player2Icon");
    Player2IconDiv.textContent = player2.icon;
  };
  return { gameDisplay, startGame };
};

// get player info

const playbutton = document.getElementById("playButton");
playButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("play Button Clicked");
  let form = document.getElementById("userNameForm");
  let player1Name = form.player1name.value;
  let player2Name = form.player2name.value;

  player1 = player(player1Name, "X");
  console.log(player1Name);
  console.log(player2Name);
  player2 = player(player2Name, "O");
  NewGame = gameBoard(player1, player2);
  NewGame.startGame();
});
