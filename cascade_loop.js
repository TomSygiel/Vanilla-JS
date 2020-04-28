const ary = [
  [1, 1, 4],
  [2, 4, 6],
  ['a', 'b', 'c', 'd'],
  [1, 2, 'r', 'hello']
]

const singleAry = ['a', 'd', 'g', 'h']

// console.log('Printing the first array within the array: ' + ary[0])

const addExclamation =  (x) => {
  // console.log('running addExclamation')
  return x + '!';
}

function cascadeLoop(array, fun ) {
  let itemList = [];

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {
      let transformResult = fun(array[i][j]);
      itemList.push(transformResult)
    }
  }
  
  return itemList;

}

console.log('The list of items in array is: ' + cascadeLoop(ary, (x) => {
  return x + '!'
}));


function cascadeLoopAgain(arr, genFunc) {

    let anotherNewArray = arr.map(innerArr => {
      // console.log('printing inner array:', innerArr)
      return innerArr.map(individValue => {
        return genFunc(individValue);
      })
    });
    return anotherNewArray
}

console.log('Another array: ' + cascadeLoopAgain(ary, addExclamation));


