/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null || root === undefined){
        return 0;
    }
    let que = [];
    let result = [];
    que.push(root);
    while(que.length > 0){
      let n = que.length;
      let sum = 0;
        for(let i = 0; i < n; i++) {
            let node = que.shift();
            sum += node.val;
            if(node.left !== null){
              que.push(node.left);
            } 

            if(node.right != null){
              que.push(node.right);
            } 
        }
        result.push(sum / n);
    }
    return result;

};

