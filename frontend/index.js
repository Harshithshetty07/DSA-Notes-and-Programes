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


// Problem 4: Find second largest number in an array

let secondLarg = [4, 10, 8, 18, 0, 7, 15, 18 ]

function secondLargest() {
    if(secondLarg.length < 2) return null; 

    let firstLar = 0; // -Infinity for if array has hold -ve numbers
    let secondLar = 0;  // -Infinity for if array has hold -ve numbers

    for(let i = 0; i< secondLarg.length; i++) {
        if(secondLarg[i] > firstLar) {
            secondLar = firstLar;
            firstLar = secondLarg[i]
        }
        else if( secondLarg[i] > secondLar && secondLarg[i] != firstLar) {
            secondLar = secondLarg[i]
        }
    }
    return secondLar;
}

let secondRes = secondLargest();
console.log(secondRes)

// Loop inside another Loop
// for(let i =0; i< 3; i++) {
//     for(let j = 0; j< i; j++) {
//         console.log(i , j)
//     }
// }

// for(let i =0; i< 3; i++) {
//     for(let j = i; j > 0; j--) {
//         console.log(i , j)
//     }
// }

// for(let i =2; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//         console.log(i , j)
//     }
// }


// Star Pattern
// Problem : * * * * create a star pattern
//           * * * *
//           * * * *
//           * * * *

// answer : 

function fourStar(n) {
    for(let i = 0; i < n; i++) {
            let row = ''

        for(let j = 0; j < n; j++) {
            row = row + '*'
        }
        console.log(row)
} 
}
        fourStar(4);

        // or 

        // let n = 4;
        // for(let i = 0; i < n; i++)  {
        //     let row = '';
        //     for(let j = 0; j < n; j++) {
        //         row = row + '*'
        //     }
        //     console.log(row)
        // }


     // Problem 6 : 
     /* 
                *
                *   *
                *   *  *
                *   *  * *
     */

     // Answer : 

     let a = 4;
     for(let i = 0; i < a; i++) {
        let row = '';
        for(let j = 0; j < i + 1; j++) {
            row = row + '*'
        }
        console.log(row)
     }

        // Problem 7 
        /* 
        1,
        1, 2, 
        1, 2, 3
        1, 2, 3, 4
        */

        // answer: 

        let c = 5;
        for(let i = 0; i < c; i++) {   
            let row = ''
            for(let j = 0; j < i + 1; j++) {
                row = row + (j + 1)
            }
            console.log(row)

        }

        /* 
        Problem 8 : 
        1
        2, 2
        3, 3, 3
        4, 4, 4, 4
        5, 5, 5, 5, 5
        */

        // answer : 

        let p = 5;
        for(let i = 0; i < p; i++) {
            let row = '';
            for(let j = 0; j < i + 1; j++) {
                row = row + (i + 1);
            }
            console.log(row)
        }


        /* 
        Problem 9: 
        1, 2, 3, 4, 5
        1, 2, 3, 4
        1, 2, 3
        1, 2
        1
        */
        // answer: 
        let l = 5;
        for(let i = 0; i < l; i++) {
            let row = '';
            for(let j = 0; j < l - i; j++) {
                row = row + (j +1)
            }
            console.log(row)
        }

        /* 
        Problem 10: 
                                *
                            *   *
                        *   *   *
                    *   *   *   *
                *   *   *   *   *
        */
        // answer :

        for(let i = 0; i < l; i++) {
            let row = '';
            for(let j = 0; j < l - (i + 1); j++) {
                row = row + '-';
            }
            for(let k = 0; k < i + 1; k++) {
                row = row + '*'
            }
            console.log(row)
        }

        /* 
        Problem 10: 
        1
        1 0
        1 0 1
        1 0 1 0
        1 0 1 0 1
        1 0 1 0 1 0
        */
        
        // answer :

        for(let i = 0; i < l; i++) {
            let row = '';
            let switchOne = 1;
            for(let j = 0; j < i +1; j++) {
                row = row + switchOne;
                if(switchOne == 1) {
                    switchOne = 0;
                } else {
                    switchOne = 1
                }
            }
            console.log(row)
        }

        /* 
        Problem 12 : 
        1
        0 1
        0 1 0
        1 0 1 0
        1 0 1 0 1
        */
        // answer: 
            let switchOne = 1;
            
        for(let i = 0; i < l; i++) {
            let row = '';
            for(let j = 0; j < i +1; j++) {
                row = row + switchOne;
                if(switchOne == 1) {
                    switchOne = 0;
                } else {
                    switchOne = 1
                }
            }
            console.log(row)
        }


        /* Problem 13: Write a function that returns the count of digits in a number 
        */

        function countNumber(n) {
            if(n == 0) return 1;
            n = Math.abs(n)
            let count = 0;

            while( n > 0 ) {
                n = Math.floor(n / 10);
                count++
            }
            return count
        }
        let countNumberRes = countNumber(-259);
        console.log(countNumberRes)

        
        /* Problem 14 : Palindrome Number - means if we read a number left to right or right to left it should be same number ex: 121
        
        */
         function palidromeNumber(n) {
            if(n < 0 ) return false
            
            let rev = 0;
            let nCopy = n

            while(n > 0) {
                let rem = n % 10;                  // This will gives you last number
                rev = (10 * rev) + rem;
                n = Math.floor(n / 10)                     // This will removes the last number
            }
            // if(rev == nCopy) {
            //     return true
            // }
            // else {
            //     return false
            // }

            return rev === nCopy
         }
         let palidromeNumberRes = palidromeNumber(121);
         console.log(palidromeNumberRes)