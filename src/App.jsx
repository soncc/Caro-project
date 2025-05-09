import { useState } from 'react'

export function Square({ value, onSquareClick }) {

  return (
    <button
      className="square"
      style={{
        width: '33px',
        height: '18px',
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );


}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  function handleClick(i) {
    const newSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (calculateWinner(squares)) {
      alert('Game Over, The winner is ' + calculateWinner(squares));
      confirm("Do you want to play again?") ? setSquares(Array(9).fill(null)) : alert("Thanks for playing");
      return;
    }
    if (xIsNext) {
      newSquares[i] = 'X';
    }
    else {
      newSquares[i] = 'O';
    }
    setXisNext(!xIsNext);
    setSquares(newSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )

}

function calculateWinner(squares) {
  const checkMates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < checkMates.length; i++) {
    const [a, b, c] = checkMates[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}

export default Board