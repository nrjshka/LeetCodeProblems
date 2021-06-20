/**
 Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

  More formally check if there exists two indices i and j such that :

  i != j
  0 <= i, j < arr.length
  arr[i] == 2 * arr[j] 
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] || arr[j] * 2 === arr[i]) {
        return true;
      }
    }
  }

  return false;
};
