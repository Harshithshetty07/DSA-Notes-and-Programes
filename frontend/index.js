
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
