import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/Gameboard.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";
import GameOver from "./components/GameOver.jsx";

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
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
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
    winner = players[firstSquareSumbol];
  }
}

const isDraw = !winner && gameTurns.length === 9;

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));
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

function handleRematch() {

  setGameTurns([]);

}
  return   <main>
<div id="game-container">

<ol id="players" className="highlight-player">

<Player InitialName="Player 1" symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange}/>
<Player InitialName="Player 2" symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}/>
</ol>
{winner || isDraw ? <GameOver winner={winner} onRematch={handleRematch}/> : null}
<GameBoard onSelectSquare={handleSelectSquare} 
board={gameBoard}/>

</div>
<Log turns={gameTurns}/>
  </main>;
}

export default App
