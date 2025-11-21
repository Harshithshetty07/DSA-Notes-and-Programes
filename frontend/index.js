

// Remove duplicates from sorted array.

function removeDuplicate(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return (x + 1)
}

let numArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let removeRes = removeDuplicate(numArray)
console.log(removeRes)


// Remove Element

function removeElement(nums, val) {
    let x = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1;
        }
    }
    return x;
}

let removeEleArray = [3, 2, 2, 3, 4];
let removeElemRes = removeElement(removeEleArray, 2)
console.log(removeElemRes)


// Reverse string


function reverseString(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);
    
    for(let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp
    }
    return s
}

let s = ['h', 'e', 'l', 'l', '0']
let reverseStrRes = reverseString(s)
console.log(reverseStrRes)


//  Best Time to buy and sell stock

function sellStock(prices) {

    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i]- min;
        }
        if(prices[i] < min) {
            min = prices[i]
        }
    }
    return maxProfit;
}

let prices = [7, 1, 4, 5, 2, 6, 3];
console.log(sellStock(prices))


// Merge sorted array

// function mergeSorted(nums1, m, nums2, n) {
//     let nums1Copy = nums1.slice(0,m);
//     let p1 = 0;
//     let p2 = 0;

//     for(let i = 0; i < m + n; i++) {
//         if( p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2]) ) {
//             nums1[i] = nums1Copy[p1];
//             p1++;
//         } 
//         else {
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }
//     return nums1
// }

// let nums1 = [1, 2, 3];
// let nums2 = [2, 5, 6];
// let m = nums1.length;
// let n = nums2.length;
// let mergeRes = mergeSorted(nums1, m, nums2, n)
// console.log(mergeRes)

// Or

function mergeSorted(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for(let i = m + n - 1; i >= 0; i--) {

        if(p2 < 0) {
            break;
        }

        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1
}

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
let m = nums1.length;
let n = nums2.length;
let mergeRes = mergeSorted(nums1, m, nums2, n)
console.log(mergeRes)


// Moves zeroes  


function moveZero(nums) {
    let x = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }
    for(let i = x; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
}

let nums = [1, 0, 2, 0, 3, 5]
console.log(moveZero(nums))


//  Max Consecutive Ones

function maxConsecutive(b) {
    let currCount = 0;
    let maxCount = 0;

    for(let i = 0; i < b.length; i++) {
        if(b[i] == 1) {
            currCount++;
        }
        else{
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    return Math.max(maxCount, currCount)
}

let b = [1, 0, 1, 1, 0, 0, 1, 1, 1, 2]
console.log(maxConsecutive(b))


// Missing Number

function missNumber(miss) {
    let missN = miss.length;

    let totalSumMissNumber =  missN * (missN + 1) / 2;
    let partialSum = 0;

    for(let i  = 0; i < missN; i++) {
        partialSum = partialSum +  miss[i];
    }
    return totalSumMissNumber - partialSum;
}

let miss = [1, 2, 5, 3, 0];
console.log(missNumber(miss))



// Single Number

function singleNumber(sinNu) {
     let hash = {}

     for(let i = 0; i < sinNu.length; i++) {
        if(!hash[sinNu[i]]){
        hash[sinNu[i]]  = 1
        } else {
            hash[sinNu[i]]++
        }
     }
          for(let i = 0; i < sinNu.length; i++) {
            if(hash[sinNu[i]] == 1) {
                return sinNu[i]
            }
          }
}

let sinNu = [1, 2, 5, 5, 1, 6, 2]
console.log(singleNumber(sinNu))