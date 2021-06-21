const player = (name, icon) => {
  const sayHello = () => console.log(`Hello ${player.name}`);
  return { sayHello, name, icon };
};
let i = 0;
let boxArray = ["", "", "", "", "", "", "", "", ""];

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
        } else {
          box.textContent = player2.icon;
          boxArray.splice(box.id, 1, box.textContent);
          console.log(boxArray);
          clickCounter++;
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
player1Name = document.getElementById("player1Name").value;
player2Name = document.getElementById("player2Name").value;
player1 = player(player1Name, "X");
player2 = player(player2Name, "O");
NewGame = gameBoard(player1, player2);
NewGame.startGame();

winnerCheck = (gameArray) => {
  winningArrays = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
};
