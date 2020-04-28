const originArray = [4, 6, 9, 7, 3];

function putMinToAnother(orig, another) {
    let currentMin = Infinity;
    let currentMinIndex;
    console.log('what is my orig when start putMinToAnother', orig)

    for (let i = 0; i < orig.length; i++ ) {
        console.log('What is my current i: ', orig[i]);

        if (orig[i] < currentMin) {
            currentMin = orig[i];
            currentMinIndex = i;
            console.log('Current min:', currentMin);
        }
        
        console.log('What is my copyArray here: ', orig);
        console.log('What is my current min: ', currentMin)
    }  

    another.push(currentMin);

    orig.splice(currentMinIndex, 1);

}

function bubbleSort(arr) {

    let copyArray = arr.map(element => {
        return element;
    })


    let sortedArray = [];

    console.log('Sorted array before the loop: ', sortedArray);
    const originalLength = copyArray.length
    for(let x = 0; x < originalLength; x++) {
        putMinToAnother(copyArray, sortedArray)
        console.log('sortedArray each outer loop:', sortedArray)
    }

    return sortedArray;
    
}

console.log('Sorted array at the end: ', bubbleSort(originArray));
