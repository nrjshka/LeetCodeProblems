/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length) {
    return null;
  }

  const rootIndexPostorder = Math.max(
    ...inorder.map((inorderValue) =>
      postorder.findIndex((postOrderValue) => postOrderValue === inorderValue)
    )
  );
  const rootIndexInorder = inorder.findIndex(
    (inorderValue) => inorderValue === postorder[rootIndexPostorder]
  );

  return {
    val: inorder[rootIndexInorder],
    left: buildTree(inorder.slice(0, rootIndexInorder), postorder),
    right: buildTree(inorder.slice(rootIndexInorder + 1), postorder),
  };
};
