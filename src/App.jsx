import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
 import GameBoard from "./components/Gameboard.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";

const initialGameboard = [
[null,null,null],
[null,null,null],
[null,null,null],
];

function deriveActivePlayer(gameTurns) {
  let cuurentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    cuurentPlayer = 'O';
  }
  return cuurentPlayer;
}

 function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner, setHasWinner] = useState(false);
  //const [activePlayer, setActivePlayer] = useState ("X");
 const activePlayer = deriveActivePlayer(gameTurns);
 
let  gameBoard = [...initialGameboard.map(innerArray => [...innerArray])];
for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard [row][col] = player;
}

let winner;

for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSumbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSumbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSumbol = gameBoard[combination[2].row][combination[2].column];

  if (
    firstSquareSumbol &&
    firstSquareSumbol === secondSquareSumbol &&
    firstSquareSumbol === thirdSquareSumbol
  ) {
    winner = firstSquareSumbol;
  }
}

  function handleSelectSquare(rowIndex, colIndex ) {
  //setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
setGameTurns((prevTurns) => {
  const currentPlayer = deriveActivePlayer(prevTurns);
  const updatedTurns = [
    {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns
  ];
  return updatedTurns;
}); 
}

  return   <main>
<div id="game-container">

<ol id="players" className="highlight-player">

<Player InitialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
<Player InitialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
</ol>
<GameBoard onSelectSquare={handleSelectSquare} 
board={gameBoard}/>

</div>
<Log turns={gameTurns}/>
  </main>;
}

export default App
