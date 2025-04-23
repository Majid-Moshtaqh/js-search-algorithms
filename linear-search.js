/**
 * Linear Search Algorithm
 * Returns the index of the element if found, otherwise -1
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const numbers = [3, 8, 14, 5, 23, 42];
const target = 5;
const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log(`Target ${target} found at index ${result}`);
} else {
  console.log(`Target ${target} not found in the array`);
}
