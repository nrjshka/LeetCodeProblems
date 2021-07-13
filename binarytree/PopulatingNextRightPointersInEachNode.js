/*
  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }

  if (root.left) {
    root.left.next = root?.right;
  }

  if (root.right) {
    root.right.next = root.next ? root.next.left : null;
  }

  connect(root.right);
  connect(root.left);

  return root;
};
