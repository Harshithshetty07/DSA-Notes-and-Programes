

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
