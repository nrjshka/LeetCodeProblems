/**
  Given an array of integers arr, return true if and only if it is a valid mountain array.

  Recall that arr is a mountain array if and only if:

  arr.length >= 3
  There exists some i with 0 < i < arr.length - 1 such that:
  arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let currentPoint = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      return false;
    }

    if (currentPoint < 0 && arr[i - 1] > arr[i]) {
      currentPoint = i - 1;
    } else if (currentPoint >= 0 && arr[i - 1] < arr[i]) {
      return false;
    }
  }

  if (currentPoint <= 0 || currentPoint === arr.length - 1) {
    return false;
  }

  return true;
};
