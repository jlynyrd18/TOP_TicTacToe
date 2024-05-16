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
  gameboard.board.forEach((rowData, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    rowData.forEach((cellData, columnIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = cellData !== null ? cellData : '';

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
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (cell.textContent.trim() !== '') {
        alert("Someone has chosen that spot already. Choose a new one");
        return;
      }
      cell.textContent = currentPlayer.symbol;
      turnCounter++;
      if (turnCounter >= 5) {
        if (turnCounter >= 6 && solutions()) {
          announce.textContent = `${currentPlayer.title} wins!`;
          return;
        }else if(turnCounter === 9) {
          announce.textContent = "It's a draw!";
          return;
        }
      }
      currentPlayer = (currentPlayer === players.player1) ? players.player2 : players.player1;
      announce.textContent = `${currentPlayer.title}'s turn with ${currentPlayer.symbol}`;
    })
  })

  function solutions(title) {
    let symbol;
    if(title === players.player1.title) {
      symbol = players.player1.symbol;
    }else {
      symbol = players.player2.symbol;
    }
    
    //column check
    if (gameboard.board[0][0] === symbol && gameboard.board[1][0] === symbol && gameboard.board[2][0] === symbol){
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else if (gameboard.board[0][1] === symbol && gameboard.board[1][1] === symbol && gameboard.board[2][1] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else if (gameboard.board[0][2] === symbol && gameboard.board[1][2] === symbol && gameboard.board[2][2] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }
    //row check
    else if (gameboard.board[0][0] === symbol && gameboard.board[0][1] === symbol && gameboard.board[0][2] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else if (gameboard.board[1][0] === symbol && gameboard.board[1][1] === symbol && gameboard.board[1][2] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else if (gameboard.board[2][0] === symbol && gameboard.board[2][1] === symbol && gameboard.board[2][2] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }
    //diagnol check
    else if(gameboard.board[0][0] === symbol && gameboard.board[1][1] === symbol && gameboard.board[2][2] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else if (gameboard.board[0][2] === symbol && gameboard.board[1][1] === symbol && gameboard.board[2][0] === symbol) {
      console.log(`${title} wins this round`);
      winner = title;
      return;
    }else{
      return;
    }
  }
}
