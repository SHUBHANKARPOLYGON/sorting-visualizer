export const mergeSort = (array, setArray, setAnimations) => {
    const animations = [];
    const auxiliaryArray = [...array]; // Create a copy of the array
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    setAnimations(animations); // Pass animations to the visualizer
  };
  
  const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
    if (startIdx === endIdx) return; // Base case: single element
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  };
  
  const merge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
    let i = startIdx; // Pointer for left half
    let j = middleIdx + 1; // Pointer for right half
    let k = startIdx; // Pointer for main array
  
    while (i <= middleIdx && j <= endIdx) {
      // Highlight the elements being compared
      animations.push([i, j, false]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // Overwrite the value in the main array and push the overwrite animation
        animations.push([k, auxiliaryArray[i], true]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j], true]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
  
    while (i <= middleIdx) {
      // Copy remaining elements from the left half
      animations.push([i, i, false]);
      animations.push([k, auxiliaryArray[i], true]);
      mainArray[k++] = auxiliaryArray[i++];
    }
  
    while (j <= endIdx) {
      // Copy remaining elements from the right half
      animations.push([j, j, false]);
      animations.push([k, auxiliaryArray[j], true]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  };
  