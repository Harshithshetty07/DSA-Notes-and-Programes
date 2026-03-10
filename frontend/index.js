
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


// Problem 5: Find most frequent vowel and consonant

let s1 = 'successes'

function vowel(s) {
    let map = {}  // Store all the values with freq in a map
    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }
    // find the max vowels and consonant inside the map
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0;
    let maxConsonant = 0;
    let keys = Object.keys(map)

    for(let i = 0; i < keys.length; i++) {
        if(vowels.includes(keys[i])) {
            // maxVowels = Math.max(maxVowels, map[s[i]])
            if(map[keys[i]] > maxVowels) {
                maxVowels = map[keys[i]]
            }
        } else {
            // maxConsonant = Math.max(maxConsonant, map[s[i]])
            if(map[keys[i]] > maxConsonant) {
                maxConsonant = map[keys[i]]
            }
        }
    }
return maxConsonant + maxVowels
}

console.log(vowel(s1))


// Problem 6: Largest odd number in string

let num = '52'

function oddNumber(s) {
    let n = s.length - 1;
    while (n >= 0) {
        if(Number(s[n]) % 2 == 1) {
            return s.substring(0, n+1)
        } else {
            n--
        }
    }
    return '';
}

console.log(oddNumber(num))