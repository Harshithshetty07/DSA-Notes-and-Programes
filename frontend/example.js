console.log('Hello Dsa')

let arr = {
    a: 10,
    obb:[1, 5, 6, 10]};
console.log(arr.obb);

function greet(name) {
    console.log("Welcome " + name);
}
let a = 'Traveling'

greet('Rakshith')
greet('Shetty')
greet(a);


function square(x) {
    let result = x * x;

    return result;
}

let value = square(99);
console.log(value)


function voteEligible(age) {
    if(age < 0) {
        console.log('Invalid input');
    }
    else if(age < 18){
        console.log('Not eligible to vote')
    }
    else {
        console.log('Eligible to vote')
    }
}

voteEligible(20)


function evenOdd(num) {
    let rem = num % 2;

    if(rem == 0) {
        console.log('Even Number')
    } 
    else {
        console.log('Odd Number')
    }
}

evenOdd(844424)


for(let i = 0; i <= 5; i= i +2) {
    console.log('Hello world ' + i)
}

const arrs = [1, 2, 5, 8];
const arrResult = []
const length = arrs.length; // same as the i < arrs.length;

for(let i = 0; i < arrs.length; i++) {
    arrResult.push(arrs[i] + 2) 
    console.log(i)
}
console.log(arrResult)


let i = 0;

while(i< 5) {
    console.log('Hello DSA');
    
    i++;
}