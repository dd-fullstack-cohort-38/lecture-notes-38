// 1. Write a function that converts weights to grams.  The function should take two arguments.  The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg".  Based on the second argument, convert the number to grams and output it.

function convertToGrams (weight, units){
let grams
  switch(units){
    case 'lbs':
      grams = weight * 453.592
      break
    case 'oz':
      grams = weight * 28.3495
      break
    case 'kg':
      grams = weight * 1000
      break
    case 'mg':
      grams = weight / 1000
      break
    case 'g':
      grams = weight
      break
    default:
      grams = 'invalid units'
  }
  return grams
}

console.log(convertToGrams(5, 'lbs'))

let toGrams = convertToGrams

console.log(toGrams)




// 2. Write a function that takes a number and finds the sum of all unique positive factors of a number.  (The factors of a number are all numbers that divide evenly into it.  For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

function addPositiveFactors (number) {
  let sum = 0
  // for (counter start ; counter end ; step by)
  for (let i = 1; i <= number; i = i + 1){
    if(number % i === 0){
      sum = sum + i
    }
  }
  return sum
}
console.log(addPositiveFactors(12))



let addFactors = (number) => {
  let sum = 0
  for (let i = 1; i <= number; i++){
    if(number % i === 0){
      sum = sum + i
    }
  }
  return sum
}
console.log(addFactors(12))