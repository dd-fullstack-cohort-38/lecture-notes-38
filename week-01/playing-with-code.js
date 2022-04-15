let wordData;

console.log(wordData)

wordData = "Word list";

console.log(wordData)

// declare variable number outside the scope of the function
let number = 32

function squareNum (number) {
  console.log('number inside function', number)
  let squared = number * number;
  return squared;
}
let squaredNumber = squareNum(7);
console.log(squaredNumber);
console.log(squareNum(12))
console.log(squareNum(6))
console.log(squareNum(8))
console.log(squareNum(3))

let arrayToBeSquared = [7, 12, 6, 8, 3]
arrayToBeSquared.forEach(pizzas => console.log(squareNum(pizzas)))

console.log('number outside the scope of the function', number)

function displayName (name){
  console.log(name)
}

let printName = name => console.log(name)

displayName('Bob')
printName('Mary')
