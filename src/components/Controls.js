import React from 'react';

const Controls = ({ handleGenerateArray, handleSort }) => {
  return (
    <div className="controls">
      <button onClick={handleGenerateArray}>Generate Array</button>
      <button onClick={() => handleSort('bubbleSort')}>Bubble Sort</button>
      <button onClick={() => handleSort('quickSort')}>Quick Sort</button>
      <button onClick={() => handleSort('insertionSort')}>Insertion Sort</button>
    </div>
  );
};

export default Controls;
