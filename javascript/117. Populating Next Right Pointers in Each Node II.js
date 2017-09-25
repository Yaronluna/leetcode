/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(root === null || root === undefined){
        return;
    }

    while (root !== null){
        let tempChild    = new TreeLinkNode(0);
        let currentChild = tempChild
        while (root !== null) {
            if (root.left !== null) {
                currentChild.next = root.left; 
                currentChild = currentChild.next;
            }
            if (root.right !== null) {
                currentChild.next = root.right; 
                currentChild = currentChild.next;
            }
            
            root = root.next;

        }
        root = tempChild.next;
    }
    
};


