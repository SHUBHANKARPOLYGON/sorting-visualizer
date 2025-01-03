import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Controls from './Controls';
import { bubbleSort } from '../algorithms/bubbleSort';
import { quickSort } from '../algorithms/quickSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [highlighted, setHighlighted] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const generateArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setAnimations([]);
    setCurrentAnimation(0);
    setStartTime(null);
    setEndTime(null);
  };

  const playAnimations = () => {
    if (currentAnimation >= animations.length) {
      setEndTime(Date.now());
      return;
    }
    const [i, j, swap] = animations[currentAnimation];
    setHighlighted([i, j]);
    if (swap) {
      setArray((prev) => {
        const newArr = [...prev];
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr;
      });
    }
    setCurrentAnimation(currentAnimation + 1);
  };

  useEffect(() => {
    if (animations.length) {
      const interval = setInterval(playAnimations, 100);
      return () => clearInterval(interval);
    }
  }, [animations, currentAnimation]);

  const handleSort = (type) => {
    setStartTime(Date.now());
    const sortingAlgorithm = type === 'bubbleSort' ? bubbleSort : quickSort;
    sortingAlgorithm(array, setArray, setAnimations);
  };

  const calculateTimeTaken = () => {
    if (startTime && endTime) {
      return ((endTime - startTime) / 1000).toFixed(2); // Time in seconds
    }
    return null;
  };

  return (
    <div className="visualizer">
      <Controls handleGenerateArray={generateArray} handleSort={handleSort} />
      <div className="bars-container">
        {array.map((value, index) => (
          <Bar key={index} value={value} index={index} highlighted={highlighted.includes(index)} />
        ))}
      </div>
      {endTime && (
        <div className="time-taken">
          Sorting completed in {calculateTimeTaken()} seconds!
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;
