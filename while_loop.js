
function getRandomInt() {
  // Returns a random number from 0-99
  return Math.floor(Math.random() * 100);
}

let randomNumber = getRandomInt();

while (!(randomNumber == 99)) {
  console.log(randomNumber)
  randomNumber = getRandomInt()
}

console.log(randomNumber)


