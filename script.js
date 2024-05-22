// console.log("Type `startGame()` to start");
// function drawBoard(turnCounter, gameboard) {
//   console.group(`Score after round ${turnCounter}`);
//   console.log("");
//   console.log((gameboard.board[0][0] || ' 1 ') + " | " + (gameboard.board[0][1] || ' 2 ') + " | " + (gameboard.board[0][2] || ' 3 '));
//   console.log("--------------");
//   console.log((gameboard.board[1][0] || ' 4 ') + " | " + (gameboard.board[1][1] || ' 5 ') + " | " + (gameboard.board[1][2] || ' 6 '));
//   console.log("--------------");
//   console.log((gameboard.board[2][0] || ' 7 ') + " | " + (gameboard.board[2][1] || ' 8 ') + " | " + (gameboard.board[2][2] || ' 9 '));
//   console.groundEnd;
// }
const container = document.getElementById("container");
const player1Name = document.getElementById("player1-name");
const player1Wins = document.getElementById("round-won1");
const board = document.getElementById("board");
const player2Name = document.getElementById("player2-name");
const player2Wins = document.getElementById("rounds-won2");
const startBtn = document.getElementById("start-button");
const announce = document.getElementById("announcement");

startBtn.addEventListener("click", () => {
  board.innerHTML = '';
  startGame();
});


//start game and get names
function startGame() {
  //initializing game
  let players = {
    player1: {
      title: prompt("Name of player 1", "Player 1"),
      symbol: "X"
    },
    player2: {
      title: prompt("Name of player 2", "Player 2"),
      symbol: "O"
    }
  }
  const gameboard = {
    board: [
      [null, null, null],
      [null, null, null], 
      [null, null, null]
    ]
  }
  //create game board first the row then the cell
  let cellId = 1;
  gameboard.board.forEach((rowData) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    rowData.forEach((cellData) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = cellData !== null ? cellData : '';
      cellDiv.id = `cell-${cellId}`;
      cellId++;

      rowDiv.appendChild(cellDiv);
    })
    board.appendChild(rowDiv);
  })
  
  player1Name.textContent = players.player1.title;
  player2Name.textContent = players.player2.title;

  const cells = document.querySelectorAll('.cell');
  let currentPlayer = players.player1;

  //playthrough logic
  let turnCounter = 0;
  let gameActive = true;
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if(!gameActive){
        return;
      }
      if (cell.textContent.trim() !== '') {
        alert("Someone has chosen that spot already. Choose a new one");
        return;
      }
      cell.textContent = currentPlayer.symbol;
      turnCounter++;
      if (turnCounter >= 5 ) {
        if (turnCounter >= 5 && solutions(currentPlayer.symbol)) {
          announce.textContent = `${currentPlayer.title} wins!`;
          gameActive = false;
          return;
        }else if(turnCounter === 9) {
          announce.textContent = "It's a draw!";
          gameActive = false;
          return;
        }
      }
      currentPlayer = (currentPlayer === players.player1) ? players.player2 : players.player1;
      announce.textContent = `${currentPlayer.title}'s turn with ${currentPlayer.symbol}`;
    })
  })

  //game still run after winner 

  function solutions(symbol) {
    // each cell has an id use that to track for solutions
    const cell1 = document.getElementById("cell-1");
    const cell2 = document.getElementById("cell-2");
    const cell3 = document.getElementById("cell-3");
    const cell4 = document.getElementById("cell-4");
    const cell5 = document.getElementById("cell-5");
    const cell6 = document.getElementById("cell-6");
    const cell7 = document.getElementById("cell-7");
    const cell8 = document.getElementById("cell-8");
    const cell9 = document.getElementById("cell-9");
  
    if ((cell1.textContent === symbol && cell2.textContent === symbol && cell3.textContent === symbol) ||
          (cell4.textContent === symbol && cell5.textContent === symbol && cell6.textContent === symbol) ||
          (cell7.textContent === symbol && cell8.textContent === symbol && cell9.textContent === symbol)) {
        return true;
      }

      // Check columns
      if ((cell1.textContent === symbol && cell4.textContent === symbol && cell7.textContent === symbol) ||
          (cell2.textContent === symbol && cell5.textContent === symbol && cell8.textContent === symbol) ||
          (cell3.textContent === symbol && cell6.textContent === symbol && cell9.textContent === symbol)) {
        return true;
      }

      // Check diagonals
      if ((cell1.textContent === symbol && cell5.textContent === symbol && cell9.textContent === symbol) ||
          (cell3.textContent === symbol && cell5.textContent === symbol && cell7.textContent === symbol)) {
        return true;
      }

      return false;
    
  }
}
