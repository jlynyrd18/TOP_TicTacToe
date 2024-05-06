console.log("Type `startGame()` to start");
function drawBoard(turnCounter, gameboard) {
  console.group(`Score after round ${turnCounter}`);
  console.log("");
  console.log((gameboard.board[0][0] || ' 1 ') + " | " + (gameboard.board[0][1] || ' 2 ') + " | " + (gameboard.board[0][2] || ' 3 '));
  console.log("--------------");
  console.log((gameboard.board[1][0] || ' 4 ') + " | " + (gameboard.board[1][1] || ' 5 ') + " | " + (gameboard.board[1][2] || ' 6 '));
  console.log("--------------");
  console.log((gameboard.board[2][0] || ' 7 ') + " | " + (gameboard.board[2][1] || ' 8 ') + " | " + (gameboard.board[2][2] || ' 9 '));
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
  let turnCounter = 1;
  let winner = "";
  while(turnCounter <= 9) {
    if (turnCounter % 2 !== 0) {
      let choice = prompt(`${players.player1.title} pick a number to put your symbol 1-9`);
      let number = parseInt(choice);
      //need way to go back to prompt if anything other than 1-9 is entered
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
      drawBoard(turnCounter, gameboard);

      if (turnCounter >= 5) {
        solutions(players.player1.title);
      }
      if(winner === players.player1.title) {
        break;
      }else if (turnCounter === 9) {
        console.log("The game ended in a tie");
      }
      turnCounter++;

    }else if (turnCounter % 2 === 0) {
      let choice = prompt(`${players.player2.title} pick a number to put your symbol 1-9`);
      let number = parseInt(choice);
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
      drawBoard(turnCounter, gameboard);

      if (turnCounter >= 5) {
        solutions(players.player2.title);
      }
      if(winner === players.player2.title) {
        break;
      }
      turnCounter++;
    }
  }
  
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
