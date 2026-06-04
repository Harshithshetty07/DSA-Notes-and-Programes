// Problem 1: Two sum

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// answer 1: 

function twoSum(arr, target) {
    let n = arr.length - 1;
    for(let i = 0; i < n ; i++) {
        for(let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j]
            if(sum === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))

// answer 2: 

function twoSum1(arr, target) {

let map = {}
    for(let i = 0; i < arr.length; i++) {
        let num = target - arr[i]

        if(map[num] !== undefined) {
            return [map[num], i]
        }
        map[arr[i]] = i;
    }
}

console.log(twoSum1([7, 2, 12, 16], 14))