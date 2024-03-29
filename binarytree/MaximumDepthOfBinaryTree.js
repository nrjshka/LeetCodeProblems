/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @param {TreeNode} node
 * @return {number}
 */
var maxDepth = function (node) {
  if (!node) {
    return 0;
  }

  const leftLevelSize = maxDepth(node.left) + 1;
  const rightLevelSize = maxDepth(node.right) + 1;

  return Math.max(leftLevelSize, rightLevelSize);
};
