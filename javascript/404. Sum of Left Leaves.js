/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if(root === undefined || root === null || root.val === null){
    return 0;
  }
  var leftLeavesSum = function (root, fromLeft){
    if(root === undefined || root === null || root.val === null){
      return 0;
    }
    if(root.left === null && root.right == null){
      if(fromLeft){
        return root.val;
      }else{
        return 0;
      }      
    }
    let sum = 0;
    if(root.left !== null ){
      sum += leftLeavesSum(root.left, true);
    }
    if(root.right !== null){
      sum += leftLeavesSum(root.right, false);
    }

    return sum;
  }
  let sum = leftLeavesSum(root, false);
  return sum;
};