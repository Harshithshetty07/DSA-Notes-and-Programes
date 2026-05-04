
// Problem 1: Implement Stack using queues

function myStack() {
    this.q1 = [];
    this.q2 = [];

    this.q1.push(x);

    // Pop
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        let front = this.q1.shift();
        this.q2.push(front);
        //this.q2.push(this.q1.shift())
    }
    let ans =  this.q2.shift()
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp

    return ans


    // Top
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift())
    }
    let front = this.q1[0]
    this.q2.push(this.q1.shift())
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp
    return front;


    // Empty

    return this.q1.length === 0
}