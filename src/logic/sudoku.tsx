import { TBoard, TEmptySpot } from './types';

// Function to find the next empty spot in the board
export const nextEmptySpot = (board: TBoard): TEmptySpot => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
};

// Function to check if a number is valid in a row
export const checkRow = (board: TBoard, row: number, value: number): boolean => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === value) return false;
  }
  return true;
};

// Function to check if a number is valid in a column
export const checkColumn = (board: TBoard, column: number, value: number): boolean => {
  for (let i = 0; i < 9; i++) {
    if (board[i][column] === value) return false;
  }
  return true;
};

// Function to check if a number is valid in a 3x3 square
export const checkSquare = (board: TBoard, row: number, column: number, value: number): boolean => {
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(column / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === value) return false;
    }
  }
  return true;
};

// Function to validate if a value is allowed at a specific position
export const checkValue = (board: TBoard, row: number, column: number, value: number): boolean => {
  return (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  );
};

// Main Sudoku-solving function
export const solveSudoku = (board: TBoard): TBoard | null => {
    const [row, col] = nextEmptySpot(board);
  
    // If no empty spot, board is solved
    if (row === -1 && col === -1) return board;
  
    for (let num = 1; num <= 9; num++) {
      if (checkValue(board, row, col, num)) {
        board[row][col] = num;
  
        if (solveSudoku(board)) {
          return board;
        }
  
        // Backtrack
        board[row][col] = 0;
      }
    }
  
    return null; // If no solution
  };
  
