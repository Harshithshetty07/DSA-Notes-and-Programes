// console.log('Hello Dsa')

// let arr = {
//     a: 10,
//     obb:[1, 5, 6, 10]};
// console.log(arr.obb);

// function greet(name) {
//     console.log("Welcome " + name);
// }
// let a = 'Traveling'

// greet('Rakshith')
// greet('Shetty')
// greet(a);


// function square(x) {
//     let result = x * x;

//     return result;
// }

// let value = square(99);
// console.log(value)


// function voteEligible(age) {
//     if(age < 0) {
//         console.log('Invalid input');
//     }
//     else if(age < 18){
//         console.log('Not eligible to vote')
//     }
//     else {
//         console.log('Eligible to vote')
//     }
// }

// voteEligible(20)


// function evenOdd(num) {
//     let rem = num % 2;

//     if(rem == 0) {
//         console.log('Even Number')
//     } 
//     else {
//         console.log('Odd Number')
//     }
// }

// evenOdd(844424)


// for(let i = 0; i <= 5; i= i +2) {
//     console.log('Hello world ' + i)
// }

// const arrs = [1, 2, 5, 8];
// const arrResult = []
// const length = arrs.length; // same as the i < arrs.length;

// for(let i = 0; i < arrs.length; i++) {
//     arrResult.push(arrs[i] + 2) 
//     console.log(i)
// }
// console.log(arrResult)


// let i = 0;

// while(i< 5) {
//     console.log('Hello DSA');
    
//     i++;
// }

// Problem 1 - Write a function that searches for an element in an array
// and returns the index, if the element is not present then just return -1

let arr = [4, 2, 10, 8, 3, 10]

function searchElement(x) {
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === x) {
            return i
        }
        // else {
        //     return -1  both are same 
        // }
    }
    return -1
}
let result = searchElement(3)
console.log(result)


// Problem 2 : Write a function that returns the number of negative numbers in an array

let negative = [ 10, -20, 4, -65, 30, 10]

function negativeNumber(negative) {
    let count = 0;
    for(let i = 0; i< negative.length; i++) {
        if(negative[i] < 0) {

            console.log(negative[i])   // using this code to display a -ve number in console
            count++                   // count = count + 1
        }
    }
    return count
}
let total = negativeNumber(negative)
console.log(total)


// Problem 3: Write a function that returns the largest number in an array

let largest = [2, 10, 100, 20.2, 4, 50]

function largestNumber(largest) {
    let larNum = -Infinity;
    for(let i = 0; i <largest.length; i++) {
        if(largest[i] > larNum) {
            larNum = largest[i]
        }
    }
return larNum
}

let resLarg = largestNumber(largest)
console.log(resLarg)