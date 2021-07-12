/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length) {
    return null;
  }

  const rootIndexPostorder = Math.min(
    ...inorder.map((inorderValue) =>
      preorder.findIndex((postOrderValue) => postOrderValue === inorderValue)
    )
  );
  const rootIndexInorder = inorder.findIndex(
    (inorderValue) => inorderValue === preorder[rootIndexPostorder]
  );

  return {
    val: inorder[rootIndexInorder],
    left: buildTree(preorder, inorder.slice(0, rootIndexInorder)),
    right: buildTree(preorder, inorder.slice(rootIndexInorder + 1)),
  };
};
