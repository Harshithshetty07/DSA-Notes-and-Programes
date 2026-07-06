// Problem 1: Binary tree preorder traversal


/*
Input: root = [1,null,2,3]

Output: [1,2,3]
*/

// answer 1 Recurssion method

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

// answer 2 : Stack method

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

// answer 1 Recurssion method

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

// answer 2 : Stack method

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


// Problem 3 : Binary Tree Postorder Traversal


/*
Input: root = [1,null,2,3]

Output: [3,2,1]

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,6,7,5,2,9,8,3,1]
*/

// Answer 1: Recurssion method

var postorderTraversal = function(root) {
    let ans = []

    function traversal(curr) {
        if(!curr) return

        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.val)
    }
    traversal(root)
    return ans
};


// Answer 2 : Stack method

var postorderTraversal = function(root) {
    if(!root) return []
    let s1 = [root];
    let s2 = []

    while(s1.length) {
        let curr = s1.pop()
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right)
    }

    let ans = []

    while(s2.length) {
        ans.push(s2.pop().val)
    }
    return ans
}