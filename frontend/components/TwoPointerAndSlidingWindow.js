

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

