/*
  Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

  After doing so, return the array.
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let N = -1;
  let outputArray = [];

  for (let i = arr.length - 1; i > 0; i--) {
    outputArray.push(N);

    if (arr[i] > N) {
      N = arr[i];
    }
  }

  outputArray.push(N);

  return outputArray.reverse();
};
