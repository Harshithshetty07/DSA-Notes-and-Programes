// Problem 1:  Subsets

/*
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

// answer

function subsets(nums) {
  let res = []

    let backtrack = (path, start) => {
        res.push([...path])

        for(let i = start; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(path, i + 1)
            path.pop();
        }
    }
    backtrack([], 0)

    return res
}

console.log(subsets([1, 2, 3]))