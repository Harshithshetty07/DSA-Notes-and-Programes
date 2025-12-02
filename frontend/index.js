// Example of Recursion

function example(n) {
  if (n == 0) return;

//   console.log(n);
  n = n - 1;
  example(n);
}

let n = 5;
example(n);

// Example 2: Print 1 to n using recursion
let a = 5;

function exampleOne(x) {
  if (x > a) return;

//   console.log(x);
  x = x + 1;
  exampleOne(x); // or use this exampleOne(x++)
}
exampleOne(1);

// Example 3: Sum of first n numbers

function sumNum(n) {
  if (n == 0) return 0;

  return n + sumNum(n - 1);
}
// console.log(sumNum(5));

// function sum(b) {
//     let total = 0;
// for(let i = 0; i < b.length; i++) {
//    total += b[i]
// }
//  return total
// }

// let b = [1, 2, 3, 4, 5]
// console.log(sum(b))


// Example 4: Sum of all elements in an array
let arr = [5, 3, 2, 0, 1]

function sumOfArray(n) {
    if( n == 0) return arr[n];

    return arr[n] + sumOfArray( n - 1)

}
console.log(sumOfArray(arr.length - 1))

// Example: Factorial using Recursion

function factorial(n) {
    if(n == 1) return 1;

    return n * factorial(n - 1)
}
console.log(factorial(5))

// Example6:  Power of Two

function power(n) {
    if( n == 1) return true;
        else if(n < 1 || (n % 2 !==0)) return false;
    return power(n / 2)
}

console.log(power(5 ))


// Example 7: Fibonacci Number

let finArray = []

function fibonacci(n) {
    if( n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2) 
}
console.log(fibonacci(23))