import React, { useState } from 'react';
import Board from './components/Board';
import { solveSudoku } from './logic/sudoku';
import { TBoard } from './logic/types';
import { initialBoard } from './components/intialBoard';// Fixed import path

const App: React.FC = () => {
  const [board, setBoard] = useState<TBoard>(initialBoard); // State initialized with `initialBoard`

  // Handle solving the Sudoku board
  const handleSolve = () => {
    const copiedBoard = [...board.map(row => [...row])]; // Create a deep copy
    const isSolved = solveSudoku(copiedBoard);

    if (isSolved) {
      setBoard(copiedBoard);
    } else {
      alert('No solution found');
    }
  };

  // Handle changes to individual cells
  const handleCellChange = (row: number, col: number, value: number) => {
    const newBoard = [...board.map(r => [...r])]; // Deep copy of the board
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <Board board={board} onCellChange={handleCellChange} />
      <button onClick={handleSolve}>Solve</button>
    </div>
  );
};

export default App;
