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


// Problem 2: Binary Tree Inorder Traversal

/*
Input: root = [1,null,2,3]

Output: [1,3,2]

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,2,6,5,7,1,3,9,8]
*/

// answer 1 

var inorderTraversal = function(root) {
    let ans = []
    function traversal(curr) {
        if(!curr) return 
        
        traversal(curr.left)
        ans.push(curr.val)

        traversal(curr.right)
    }
    traversal(root)
    return ans

    
};

// answer 2

var inorderTraversal = function(root) {
    let ans = []
    let curr = root
    let stack = []

    while(curr || stack.length) {
        while(curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        ans.push(curr.val)
        curr = curr.right
    }
    return ans

}