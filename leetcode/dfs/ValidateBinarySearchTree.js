// https://leetcode.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */
 var isValidBST = function(root) {
  let answer = true;
  function dfs(node) {
      if (!node) return
      if (node.left >= node.val || node.right >= node.val)  answer = false;
      dfs(node.left);
      dfs(node.right);\
  }
  dfs(root);
  return answer;
};