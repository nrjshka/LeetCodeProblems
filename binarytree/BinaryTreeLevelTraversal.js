/*
  Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let output = [];
  let stack = [root];

  while (stack.length) {
    const temp = [];

    output.push([]);

    for (let stackValue of stack) {
      output[output.length - 1].push(stackValue.val);

      if (stackValue.left) {
        temp.push(stackValue.left);
      }

      if (stackValue.right) {
        temp.push(stackValue.right);
      }
    }

    stack = temp;
  }

  return output;
};
