// Problem 1: Validate Binary Search Tree

/*
Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

var isValidBST = function (root) {
    
    let isBST = (curr, lo, hi) => {
        if (!curr) return true;

        if ((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi)) {
            return false
        }

        let isLeft = isBST(curr.left, lo, curr.val)
        let isRight = isBST(curr.right, curr.val, hi)

        return isLeft && isRight
    }
    return isBST(root, null, null)

};


// Problem 2: Search in a Binary Search Tree

/*
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Input: root = [4,2,7,1,3], val = 5
Output: []
*/

var searchBST = function(root, val) {
    let ans = null;
    let traversal = (curr) => {

        if(curr.val === val) {
            ans = curr
        } else {
            if(curr.val < val) {
                curr.right && traversal(curr.right)
            } else {
                curr.left && traversal(curr.left)
            }
        }
    }
    traversal(root)
    return ans
};


// Problem 3: Insert into a Binary Search Tree

/*
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Example 2:

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
*/

var insertIntoBST = function(root, val) {
    
    if(!root) return new TreeNode(val)

    if(root.val < val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val)
    }

    return root
};