/*
  Given the root of a binary tree, return the postorder traversal of its nodes' values.
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
var postorderTraversal = function (root) {
  let output = [];
  let stack = [root];
  let stack2 = [];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      stack2.push(node);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  while (stack2.length) {
    output.push(stack2.pop().val);
  }

  return output;
};
