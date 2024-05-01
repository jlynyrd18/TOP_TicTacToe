console.log("Type `startGame()` to start");
function drawBoard(round, board) {
  console.group(`Score after round ${round}`);
  console.log("");
  console.log((board["1"] || '1') + " | " + (board["2"] || ' 2 ') + " | " + (board["3"] || ' 3 '));
  console.log("--------------");
  console.log((board["4"] || '4') + " | " + (board["5"] || ' 5 ') + " | " + (board["6"] || ' 6 '));
  console.log("--------------");
  console.log((board["7"] || '7') + " | " + (board["8"] || ' 8 ') + " | " + (board["9"] || ' 9 '));
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
  drawBoard(0, gameboard);

  //playthrough logic
  for(let i = 1; i < 9; i++) {
    let round = i;
    let choice = prompt("Pick a number to put your symbol 1-9");
    if (choice > 1 || choice < 9) {
      prompt("Invalid number please pick a number between 1 and 9.");
    }else if (choice === NaN) {
      prompt("That is not a number try again 1-9");
    }
  }
}