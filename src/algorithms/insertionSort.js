export function insertionSort(array, setArray, setAnimations) {
  const animations = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      animations.push([j - 1, j]); // Compare
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]; // Swap
      animations.push([j - 1, j, true]); // Swap signal
      j--;
    }
  }

  setAnimations(animations);
}
