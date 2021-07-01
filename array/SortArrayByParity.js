/*
  Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

  You may return any answer array that satisfies this condition.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let p = 0;
  let n = nums.length - 1;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr[p] = nums[i];
      p++;
    } else {
      arr[n] = nums[i];
      n--;
    }
  }

  return arr;
};
