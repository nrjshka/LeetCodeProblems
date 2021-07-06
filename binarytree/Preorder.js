/*
  Given the root of a binary tree, return the preorder traversal of its nodes' values.
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let output = [];
  let stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) {
      break;
    }

    const { val, left, right } = node;

    if (val) {
      output.push(val);
    }

    if (right) {
      stack.push(right);
    }

    if (left) {
      stack.push(left);
    }
  }

  return output;
};
