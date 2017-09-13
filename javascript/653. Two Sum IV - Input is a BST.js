/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if(root === undefined || root === null || root.val === null){
    return null;
  }

  let que = [];
  let target = {};
  target[root.val] = true;
  que.push(root);

  // counter in here is use for check how many elements we had process, since counter must >= 2 to have a pair
  count = 1;
  while (que.length > 0){
    let node = que.shift();
    if(target[k-node.val] == true && count>1){
      return true;
    }

    target[node.val] = true;

    if (node.left != null){
      que.push(node.left);
    }
    if (node.right != null){
      que.push(node.right);
    }
    count++;
  }
  return false;

};