/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var buildTreeReverse = function (inorder, postorder) {
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
    left: buildTreeReverse(inorder.slice(0, rootIndexInorder), postorder),
    right: buildTreeReverse(inorder.slice(rootIndexInorder + 1), postorder),
  };
};

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const root = postorder.pop();
  const rootIndex = inorder.findIndex((value) => value === root);

  return {
    val: root,
    left: buildTreeReverse(inorder.slice(0, rootIndex), postorder),
    right: buildTreeReverse(inorder.slice(rootIndex + 1), postorder),
  };
};
