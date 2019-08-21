const NumberOfDice = function() {
  return process.argv[2];
};
//get random number from 0 - 6
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};
//repeat rolling and add number we get each time into an array
//getting format ex [2,3,4,5] and then convert back to string
let diceNumbers = [];
for (let i = 1; i <= NumberOfDice(); i++) {
  diceNumbers.push(getRandomInt(6));
}

console.log(`Rolled ${NumberOfDice()} dice: ${diceNumbers.toString()}`);