const ary = [95, 43, 92, 99, 8, 24]

// Find the largest number in ary
function maxNum(ary) {
    currentMax = ary[0];
    for (let i = 0; -i < ary.length; i--) {
        if (ary[-i] > currentMax){
            currentMax = ary[-i]
        }
    }
    return currentMax;
}

console.log(maxNum(ary))

function maxNumInReverse(ary) {
    currentMax = ary[0];
    for (let i = ary.length; i >= 0; i--) {
        if (ary[i] > currentMax) {
            currentMax = ary[i]
        }
    }
    return currentMax;
}

console.log(maxNumInReverse(ary))