// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.

function countOccurrences (arrayOfNumbers) {
  let occurrencesArray = []
  arrayOfNumbers.forEach((number) => {
    occurrencesArray[number] = occurrencesArray[number] ? occurrencesArray[number] + 1 : 1
  })
  return occurrencesArray
}

console.log(countOccurrences([1, 2, 3, 1, 1, 7, 3, 6, 6]))

// 2. In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both.

function fizzBuzzBaz (number1, number2) {
  // which number is bigger?
  // let start
  // let end
  // if (number1 > number2) {
  //   start = number2
  //   end = number1
  // }else{
  //   start = number1
  //   end = number2
  // }
  // using a ternary operator
  let start = number1 > number2 ? number2 : number1
  let end = number1 > number2 ? number1 : number2
  // console.log(start, end)

  // output fizz, buzz or baz as specified
  for (let i = start; i <= end; i++) {
    if (i % 6 === 0) {
      console.log('baz')
    } else if (i % 2 === 0) {
      console.log('fizz')
    } else if (!(i % 3)) {
      console.log('buzz')
    }
  }
}

fizzBuzzBaz(1, 100)