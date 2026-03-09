
// Problem 1: Length of last word

let lword = '  fly    to the    moon   ';

function lastword(s) {
    /// Triim all  the  spaces at the end

    let n = s.length - 1;
    while(n >= 0) {
        if(s[n] === " ") {
            n--;
        } else {
            break
        }
    }
    // n is the point where my last word start
        // count the length of the last word

    let count = 0;
    while(n >= 0) {
        if(s[n] !== " ") {
            n--;
            count++
        } else {
            break
        }
    }
    return count

}

console.log(lastword(lword))


// Problem 2: Find words containing character

let words = ['abc', 'leet', 'code', 'aaa']

// function findWordsChar(word, x) {
//     let res = []
//     for(let i = 0; i < word.length; i++) {
//         if(word[i].includes(x)) {
//             res.push(i)
//         }
//     }
//     return res
// }

// console.log(findWordsChar(words, 'a'))

// answer 2

function findWordsChar(word, x) {
    let res = []
    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < word[i].length; j++) {
            if(word[i][j] === x) {
                res.push(i);
                break
            }
        }
    }
    return res
}

console.log(findWordsChar(words, 'a'))


// Problem 3: Jewels and stones

let arr = 'aAAbbbb'

function jewelsStones(str, val) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {

        for(let j = 0; j < val.length; j++) {
            if(val[i] === str[i]) {
                count++;
                break;
            }
        }


        // if(val.includes(str[i])) {
        //     count++
        // }
    }
    return count
}

// answer 2

function jSet(str, val) {
    let res = new Set(val);
    // for(let i = 0; i< str.length; i++) {
    //     res.add(str[i]);
    // }
    let count = 0
    for(let i = 0; i< str.length; i++) {
        if(res.has(str[i])) {
            count++
        }
    }
    return count
}


console.log(jewelsStones(arr, 'aA'))
console.log(jSet(arr, 'aA'))


// Problem 4: Split a string in balanced strings

let s = 'RLRRLLRLRL'

function splitString(s) {

    let R = 0;
    let L = 0;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'R') {
            R++
        } 
        else {
            L++
        }
        if(L === R) {
            count++
            R = 0;
            L = 0;
        }
    }
    return count
}

console.log(splitString(s))