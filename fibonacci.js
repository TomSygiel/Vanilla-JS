function fibonacci(n) {
  // For example, when n = 2, the function returns 1
  // For example, when n = 3, the function returns 2
  // For example, when n = 4, the function returns 3
 
  const a0 = 0; //previous first
  const a1 = 1; //previous second

  let a00 = a0;
  let a11 = a1;
  let result = 1; //next



  for (let i = 2; i <= n; i++) {
    // Next fibonacci number = previous + one before previous
    result = a00 + a11;
    a00 = a11;
    a11 = result;
  }
  return result;
}

console.log(fibonacci(100))

function fibonacciWhile(num) {
  let first = 0;
  let second = 1;
  let next = 1;
  let i = 2;

  while (i <= num){
    next = first + second;
    first = second;
    second = next;
    i++;
  }
  return next;
}

console.log(fibonacciWhile(100));

//Factorial
function fac(n) {
  let resultFac = 1;
  for (i = 1; i <= n; i++) {
    resultFac = resultFac * i;
  }
  return resultFac;
}

console.log(fac(5));

function facWhile(num) {
  let total = 1;
  let i = 1;
  while (i <= num) {
    total = total * i;
    i++
  }
  return total;
}

console.log(facWhile(5));

function facTwo(number) {
  let resultTwo = [1]
  for (let i = 1; i <= number; i++) {
    resultTwo[i] = resultTwo[i - 1] * i
  }
  return resultTwo;
}

console.log(facTwo(5));

function facTwoWhile(numm) {
  let secondArr = [1];
  let i = 1;
  while (i <= numm) {
    secondArr[i] = secondArr[i - 1] * i;
    i++;
  }
  return secondArr;
}

console.log(facTwoWhile(5));

function facThree(number) {
  if (number == 0) {
    return 1
  } else {
    return facThree(number - 1) * number
  }
}

console.log(facThree(5));

