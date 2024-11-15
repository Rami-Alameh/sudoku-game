import React from 'react';
import Cell from './Cell';
import { TBoard } from '../logic/types';

interface BoardProps {
  board: TBoard;
  onCellChange: (row: number, col: number, value: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellChange }) => (
  <div className="board">
    {board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          value={cell}
          row={rowIndex}
          col={colIndex}
          onChange={onCellChange}
        />
      ))
    )}
  </div>
);

export default Board;