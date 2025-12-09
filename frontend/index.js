

// BINARY Search

let nums = [-1, 0, 3, 5, 9, 12]

function binarySearch(nums, target) {


  let left = 0;
  let right = nums.length - 1;

  while(right > left) {
    let mid = Math.floor((left + right) / 2);

    if(target === nums[mid]) {
      return mid;
    }
    else if(target < mid) {
      right = mid - 1; 
    }
    else {
      left = mid + 1
    }
  }
  return -1
}

console.log(binarySearch(nums, 9))


// BUBBLE Sort

let bbsort = [1, 2, 3, 5, 4];

function bubbleSort(bbsort) {
  let n = bbsort.length;

  for(let i = 0; i < n - 1; i++) {

    let isSwapped = false;   // This is supports to stop iteration if array is already sorted there is no need to sort again

    for(let j = 0; j < n - 1 - i; j++) {
      if(bbsort[j] > bbsort[j + 1]) {
        
        let temp = bbsort[j];
        bbsort[j] = bbsort[j + 1]
        bbsort[j + 1] = temp;

        isSwapped = true;
      }
    }
      if(!isSwapped) break;
  }
  return bbsort;
}
let resBB = bubbleSort(bbsort)

console.log(resBB)


// SELECTION sort

let selcArr = [7, -10, 1, 5, 3, 4, 2]
let n = selcArr.length;

function selectionSort(selcArr) {
  for(let i = 0; i < n - 1; i++) {
    let min = i;
    for(let j = i + 1; j < n; j++) {
      if(selcArr[j] < selcArr[min]) {
        min = j
      }
    }
    if(min != i ) {
    let temps = selcArr[i]
    selcArr[i] = selcArr[min]
    selcArr[min] = temps
    }
   
  }
  return selcArr
}

let resSelS = selectionSort(selcArr)
console.log(resSelS)


// INSERTION sort

let inseArr = [7, 5, 3, 4, 1, 2]

function insortionSort(inseArr) {
  let n = inseArr.length;

  for(let i = 1; i < n; i++) {
    
    let curr = inseArr[i];
    let prev = i - 1;

    while( inseArr[prev] > curr && prev >= 0) {
      inseArr[prev + 1] = inseArr[prev];
      prev--;
    }
    inseArr[prev + 1] = curr;
  }
  return inseArr
}

let resIns = insortionSort(inseArr);
console.log(resIns)