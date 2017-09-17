/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeColumnNode(col, node) {
  this.col = col;
  this.treeNode = node;
}

var verticalOrder = function(root) {
    if(root === null || root === undefined){
      return [];
    }
    
    let index = 0, map = [], result = [],que = [], min = 0, max = 0;

    que.push(new TreeColumnNode(0,root));

    while(que.length > 0){
      let node = que.shift();
      if(map[node.col] === undefined){
      	map[node.col] = [];
      }
      map[node.col].push(node.treeNode.val);
      if (node.treeNode.left) {
          que.push(new TreeColumnNode(node.col - 1, node.treeNode.left));
          min = Math.min(min, node.col - 1);
      }
        
      if (node.treeNode.right) {
          que.push(new TreeColumnNode(node.col + 1, node.treeNode.right));
          max = Math.max(max, node.col + 1);
      }

    }
    for (let i = min; i <= max; i++) {
      result.push(map[i]);
    }
};

