const originList = [17, 14, 13, 12, 11, 10, 9 ,4];
console.log('Here is the original array: ', originList);

const tryShortArr = [3, 2, 4, 1]

function swapNum(arr, i) {
    let tempNum = arr[i];
    arr[i] = arr[i-1];
    arr[i-1] = tempNum;
}

function smallerNum(arr, i) {
  if (i == 0) {
    console.log('start of array');
    return false;
  } 
  if (arr[i] < arr[i-1]){
    console.log('number is bigger');
    return true;
  }
  console.log('number is smaller');
  return false;
}

function bubbleSort(arr) {

  let copyArray = arr.map(result => {
    return result;
  })

  for (let i = 0; i < copyArray.length; i++) {
    console.log('i in loop is: ', i);
      if(smallerNum(copyArray, i)) {

        swapNum(copyArray, i);
        i = i-2;
      }
  }
  return copyArray;
}

console.log('The sorted array: ', bubbleSort(originList));