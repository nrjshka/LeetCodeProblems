/**
  https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

  Given a binary array nums, return the maximum number of consecutive 1's in the array.

  Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let localConsecutive = 0;
  let globalConsecutive = 0;

  for (let value of nums) {
    if (value) {
      localConsecutive += 1;
    } else {
      if (localConsecutive > globalConsecutive) {
        globalConsecutive = localConsecutive;
      }

      localConsecutive = 0;
    }
  }

  if (localConsecutive > globalConsecutive) {
    globalConsecutive = localConsecutive;
  }

  return globalConsecutive;
};
