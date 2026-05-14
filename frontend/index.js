// Problem 1: Sqrt(x)
// x= 4 ------ 2


function mySqrt(x) {
    if( x < 2) return x;
    
    let left = 2;
    let rig = Math.floor(x / 2);

    while(left < rig) {
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