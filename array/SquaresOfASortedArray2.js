/*
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    result[i] = 0;
  }

  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;

  while (i <= j) {
    if (nums[i] ** 2 > nums[j] ** 2) {
      result[k] = nums[i] ** 2;
      i += 1;
    } else {
      result[k] = nums[j] ** 2;
      j -= 1;
    }
    k -= 1;
  }

  return result;
};
