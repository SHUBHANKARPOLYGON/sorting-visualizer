export function bubbleSort(array, setArray, setAnimations) {
    const animations = [];
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animations.push([j, j + 1]); // Compare
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
          animations.push([j, j + 1, true]); // Swap signal
        }
      }
    }
    setAnimations(animations);
  }
  