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
var diameterOfBinaryTree = function(root) {
    if(root === null || root === undefined){
    	return 0;
    }

    var max = 0;
    var maxPath = function(root){
    	if(root === null || root === undefined){
    		return 0;
    	}

    	let left = maxPath(root.left);
    	let right = maxPath(root.right);
    	max = Math.max(max, left + right);
    	return Math.max(left, right) + 1;
    }

    maxPath(root);

    return max;
};

