/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root === null || root === undefined){
    return [];
  }
  var result = [];
  if(root.left === null && root.right === null){
      return [root.val.toString()];
  }
  var treePaths = function(root, str){
    console.log(root.val);
    if(root === null || root === undefined){
      return;
    }
    if(root.left === null && root.right === null){
      result.push(str+"->"+root.val);
    }
    if(root.left !== null){
      treePaths(root.left, str+"->"+root.val);
    }
    if(root.right !== null){
      treePaths(root.right, str+"->"+root.val);
    }
    return;
  }
    if(root.left !== null){
      treePaths(root.left, root.val);
    }
    if(root.right !== null){
      treePaths(root.right, root.val);
    }
  return result;


};