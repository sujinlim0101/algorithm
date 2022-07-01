/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  let isSame = true;
  const dfs = (rootP, rootQ) => {
      if (!rootP && !rootQ) return;
  
      if ((rootP && !rootQ) || (rootQ && !rootP)) {
          isSame = false;
          return;
      } else if (rootP.val !== rootQ.val) {
          isSame = false;
          return;
      }
      

      dfs(rootP.left, rootQ.left);
      dfs(rootP.right, rootQ.right);
      
  }
  dfs(p, q);
  return isSame;
};