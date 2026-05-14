
// Problem 1: Implement Stack using queues

// function myStack() {
//     this.q1 = [];
//     this.q2 = [];

//     this.q1.push(x);

//     // Pop
//     let n = this.q1.length;
//     for(let i = 0; i < n - 1; i++) {
//         let front = this.q1.shift();
//         this.q2.push(front);
//         //this.q2.push(this.q1.shift())
//     }
//     let ans =  this.q2.shift()
//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp

//     return ans


//     // Top
//     let n = this.q1.length;
//     for(let i = 0; i < n - 1; i++) {
//         this.q2.push(this.q1.shift())
//     }
//     let front = this.q1[0]
//     this.q2.push(this.q1.shift())
//     let temp = this.q1;
//     this.q1 = this.q2; 
//     this.q2 = temp
//     return front;


//     // Empty

//     return this.q1.length === 0
// }


// // Problem 2: Implement Queue using Stacks

// function myQueue() {
//     this.s1 = [];
//     this.s2 = []

//     this.s1.push(x);

//     // Pop
//     if(this.s2.length === 0) {
//         while(this.s1.length) {
//             this.s2.push(this.s1.pop())
//         }
//     }
//     return this.s2.pop();

//     // Peek
//     if(this.s2.length === 0) {
//         while(this.s1.length) {
//             this.s2.push(this.s1.pop())
//         }
//     }
//     return this.s2[this.s2.length - 1]

//     // Empty
//     return this.s1.length === 0 && this.s2.length === 0;
// }


// Problem 3: Valid Parentheses

function isValid(s) {
    let stack = []


    let map = {
        "{" : "}",
        '[' : ']',
        '(' : ')'
    }

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            stack.push(s[i])
        } else {
            let top = stack.pop();
            if(!top || s[i] != map[top]) {
                return false
            }
        }
    }
    return stack.length === 0;

    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] === '{' || s[i] === '[' || s[i] === '(') {
    //         stack.push(s[i])
    //     } else {
    //         let top = stack.pop();
    //         if(!top || (top === '[' && s[i] != ']') || (top === '{' && s[i] != '}') || (top === '(' && s[i] != ')')) {
    //             return false
    //         }
    //     }
    // }
    // return stack.length === 0;
}

console.log(isValid('[()]'))  // O(n)


// Problem 4: Min Stack

function minStack() {
    this.s = [];

    // push
    if(this.s.length === 0) {
        this.s.push([val, val]);
    } else {
        let lastmin = this.s[this.s.length -1][1]
        let minVal = Math.min(val, lastmin)
        this.s.push([val, minVal])
    }

    // Pop
    this.s.pop();

    // Top
    return this.s[this.s.length - 1][0]

    // Get Min value
    return this.s[this.s.length - 1][1]
}