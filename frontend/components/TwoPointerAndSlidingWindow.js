

// Problem 1: Two Sum II - Input Array Is Sorted

/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

// answer 1

function twoSum2(num, target) {
    for(let i = 0; i < num.length; i++) {
        for(let j = i + 1; j < num.length ; j++) {
            if(num[i] + num[j] === target) {
                return [(i + 1), (j + 1)]
            }
        }
    }
}

console.log(twoSum2([2,7,11,15], 9))

// answer 2:

// function twoSum2(num, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     while(l < r) {
//         let sum = nums[l] +  nums[r]
//         if(sum > target) {
//             r--;
//         } else if(sum < target) {
//             l++
//         } else {
//             return [l+1, r+1]
//         }
//     }
// }

// console.log(twoSum2([2,7,11,15], 9))


// Problem 3: Longest Repeating Character Replacement

/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/



// Problem 4: Permutation in String

/*

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

var checkInclusion = function(s1, s2) {
    
    let hashW = Array(26).fill(0);
    let hashS = Array(26).fill(0);

    for(let i = 0; i < s1.length; i++) {
        ++hashS[s1.charCodeAt(i) - 97]
        ++hashW[s2.charCodeAt(i) - 97]
    }

    let i = 0;
    let j = s1.length - 1;

    while(j < s2.length) {
        if(isHashSame(hashS, hashW)) {
            return true
        } else {
            --hashW[s2.charCodeAt(i) - 97]
            i++
            j++
            ++hashW[s2.charCodeAt(j) - 97]

        }
    }
    return false
};

var isHashSame = function(hashW, hashS) {
    for(let i = 0; i < 26; i++) {
        if(hashS[i] !== hashW[i]) {
            return false
        }
    }
    return true
}