
// Problem 1: Length of last word

let lword = '  fly    to the    moon   ';

function lastword(s) {
    /// Triim all  the  spaces at the end

    let n = s.length - 1;
    while(n >= 0) {
        if(s[n] === " ") {
            n--;
        } else {
            break
        }
    }
    // n is the point where my last word start
        // count the length of the last word

    let count = 0;
    while(n >= 0) {
        if(s[n] !== " ") {
            n--;
            count++
        } else {
            break
        }
    }
    return count

}

console.log(lastword(lword))