import React from 'react';

interface CellProps {
  value: number;
  row: number;
  col: number;
  onChange: (row: number, col: number, value: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, row, col, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 9) {
      onChange(row, col, newValue);
    }
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value === 0 ? '' : value}
      onChange={handleChange}
      className="cell"
    />
  );
};

export default Cell;
