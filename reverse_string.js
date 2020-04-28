const str = "Hello, world!"

function reverse(str) {
  // return the reverse of str
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log('i in for loop is:', i)
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse(str))

// Test if the result of the above function is as long as the original string
function testReversedFun(originalString) {
  if (reverse(str).length == originalString.length ) {
    console.log('yay!')
  } else {
    console.log('nej!')
  }
}

testReversedFun(str)