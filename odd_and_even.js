const original = [
  36,  8,  61,  10,  52,
  55,  23,  9,  49,  14,
  41,  45,  99,  75,  19,
  9,  93,  33,  21,  89,
  75,  76,  60,  96,  33,
  51,  89,  77,  27,  73,
  35,  76,  36,  90,  36,
  50,  38,  88,  59,  85,
  26,  70,  81,  34,  86,
  17,  47,  39,  65,  90,
  90,  84,  35,  18,  52,
  85,  41,  86,  9,  21,
  15,  73,  20,  60,  54,
  14,  43,  47,  23,  77,
  56,  31,  39,  14,  83,
  96,  45,  78,  87,  74,
  7,  20,  35,  40,  80,
  40,  76,  45,  61,  33,
  31,  56,  44,  90,  73,
  95,  20,  1,  58,  67,
]


// Write your code here
function odd() {
  const oddNumbers = original.filter(i => {
    return i % 2 !== 0
  })
    
  return oddNumbers
}

oddAndEven();

// Using if statement 
// function oddAndEven() {
//   const oddNumbers = []
//   const evenNumbers = []

//   for(let i= 0; i < original.length; i++) {
//     if (original[i] % 2 == 0) {
//       evenNumbers.push(original[i])
//     } 
    
//     if (original[i] % 2 != 0) {
//       oddNumbers.push(original[i])
//     }
//   }

//   console.log("odd numbers are: ", oddNumbers)
//   console.log("even numbers are: ", evenNumbers)  
// }
