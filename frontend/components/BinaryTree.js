// Problem 1: Binary tree preorder traversal


/*
Input: root = [1,null,2,3]

Output: [1,2,3]
*/

// answer 1

var preorderTraversal = function(root) {
    let ans = []
    function traversal(curr) {
        // pre-order => root -> left => right
        if(!curr) return 

        ans.push(curr.val)
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return ans
};

// answer 2

var preorderTraversal = function(root) {
    if(!root) return []
    let ans = []

    let stack = [root]

    while   (stack.length) {
        let curr = stack.pop()
        ans.push(curr.val)
        curr.right && stack.push(curr.right)
        curr.left && stack.push(curr.left)
    }
    return ans
}