// Problem 1: Sqrt(x)
// x= 4 ------ 2


function mySqrt(x) {
    if( x < 2) return x;
    
    let left = 2;
    let rig = Math.floor(x / 2);

    while(left <= rig) {
        // let mid = Math.floor((left + rig) / 2);
        let mid = Math.floor(left + (rig - left) / 2)
        if(x === mid**2) {
            return mid
        }
        else if(x < mid**2){
            rig = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return rig
}

console.log(mySqrt(36))


// Problem 2: Guess number higher or lower

function guessNumber(n) {
    let l = 1;
    let r = n;

    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let res = guess(mid)
        if(res === 0) {
            return mid
        } else if(res < 0) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
}

// console.log(guessNumber(10))


// Problem 3: Search in Rotated sorted array

function rotateSorted(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        if(target === nums[mid]) {
            return mid
        }
        // left side sorted
        if(nums[l] <= nums[mid]) {
            if(target < nums[mid] && target >= nums[l]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        // Right side sorted
        else {
            if(target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
}

console.log(rotateSorted([4, 5, 6, 7, 8, 0, 1,2,3], 1))


// Problem 4: First Bad version

function firstBadVersion(n, bad) {
    let l = 1;
    let r = n;

    while(l < r) {
    let m = l + Math.floor((r - l) / 2)
        if(!bad(mid)) {
            l = m + 1
        } else {
            r = m
        }
    }
    return r
}

console.log(firstBadVersion([1, 2, 3, 4, 5], 4))


// Problem 5: Find Peak Element

function findPeakElement(num) {
     let l = 0
    let r = num.length - 1;
    while(l < r) {
        let m = l + Math.floor((r - l) / 2)
        if(num[m] < num[m + 1]) {
            l = m + 1
        } else {
            r = m
        }
    }
    return l
}

console.log(findPeakElement([1,2,1,3,5,6,4]))