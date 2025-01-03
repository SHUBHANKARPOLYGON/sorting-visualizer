export function quickSort(array, setArray, setAnimations) {
    const animations = [];
    const arr = [...array];
  
    function partition(low, high) {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        animations.push([j, high]); // Compare
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
          animations.push([i, j, true]); // Swap signal
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      animations.push([i + 1, high, true]); // Final pivot swap
      return i + 1;
    }
  
    function recursiveQuickSort(low, high) {
      if (low < high) {
        const pi = partition(low, high);
        recursiveQuickSort(low, pi - 1);
        recursiveQuickSort(pi + 1, high);
      }
    }
  
    recursiveQuickSort(0, arr.length - 1);
    setAnimations(animations);
  }
  