/**
 Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

  Note that elements beyond the length of the original array are not written.

  Do the above modifications to the input array in place, do not return anything from your function.

  

  Example 1:

  Input: [1,0,2,3,0,4,5,0]
  Output: null
  Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
  Example 2:

  Input: [1,2,3]
  Output: null
  Explanation: After calling your function, the input array is modified to: [1,2,3]
  

  Note:

  1 <= arr.length <= 10000
  0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let originalLength = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
    }
  }

  arr.splice(originalLength, arr.length - originalLength);

  return null;
};
