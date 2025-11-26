

// Example of Recursion

function example(n) {
    if( n == 0) return;

    console.log(n)
    n = n - 1;
    example(n)

}

let n = 5;
example(n)


// Example 2: Print 1 to n using recursion
let a = 5;

function exampleOne(x) {
    if(x > a) return;

    console.log(x)
    x = x + 1;
    exampleOne(x)         // or use this exampleOne(x++)
}
exampleOne(1)