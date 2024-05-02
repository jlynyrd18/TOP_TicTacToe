console.log("Type `startGame()` to start");
function drawBoard(round, gameboard) {
  console.group(`Score after round ${round}`);
  console.log("");
  console.log((gameboard.board[0][0] || '1') + " | " + (gameboard.board[0][1] || ' 2 ') + " | " + (gameboard.board[0][2] || ' 3 '));
  console.log("--------------");
  console.log((gameboard.board[1][0] || '4') + " | " + (gameboard.board[1][1] || ' 5 ') + " | " + (gameboard.board[1][2] || ' 6 '));
  console.log("--------------");
  console.log((gameboard.board[2][0] || '7') + " | " + (gameboard.board[2][1] || ' 8 ') + " | " + (gameboard.board[2][2] || ' 9 '));
  console.groundEnd;
}


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
  drawBoard(1, gameboard);

  //playthrough logic
  for(let i = 1; i <= 9; i++) {
    let round = i;
    const player1Turn = () => {
      let choice = prompt(`${players.player1.title} pick a number to put your symbol 1-9`);
      let number = parseInt(choice);
  
      //get row of board
      let row = 0;
      if (number <= 3) {
        row = 0;
      }else if (number >= 4 && number <= 6) {
        row = 1;
      }else {
        row = 2;
      }
  
      //square of row
      if (number <= 3) {
        number = number - 1;
      }else if (number >= 4 && number <= 6) {
        number = number - 4;
      }else {
        number = number - 7;
      }
  
      gameboard.board[row][number] = players.player1.symbol;
      drawBoard(round, gameboard);
    }

    const player2Turn = () => {
      let choice = prompt(`${players.player2.title} pick a number to put your symbol 1-9`);
      let number = parseInt(choice);
  
      //get row of board
      let row = 0;
      if (number <= 3) {
        row = 0;
      }else if (number >= 4 && number <= 6) {
        row = 1;
      }else {
        row = 2;
      }
  
      //square of row
      if (number <= 3) {
        number = number - 1;
      }else if (number >= 4 && number <= 6) {
        number = number - 4;
      }else {
        number = number - 7;
      }
  
      gameboard.board[row][number] = players.player2.symbol;
      drawBoard(round, gameboard);
    }
  }
}
//still need check square for player symbol and reject if one there as well as winning conditions