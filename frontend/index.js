

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