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


for(let i = 0; i < 10; i++) {
    console.log('Hello world')
}

for(let i = 0; i <= 5; i++) {
    console.log('Hello world ' + i)
}
