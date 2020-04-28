const numAry = [1, 2, 3, 4, 5, 6, 7, 8, 9];





function double(x) {
    return x * 2
}

function triple(x) {
    return x * 3
}

function fourTimes(x) {
    return x * 4
}

function map(ary, func) {
    let newNumAry = [];
    for (let i = 0; i < ary.length; i++) {
        newNumAry.push(func(ary[i]));
    }
    return newNumAry;
}

console.log(map(numAry, double))
console.log(map(numAry, triple))

