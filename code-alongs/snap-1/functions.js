/**
 * A simple function that takes two numbers, multiples them and returns the results
 *
 * @param {number} number1 the first value to be multiplied
 * @param {number} number2 the second value to be multiplied
 * @return {number} the value of number1 and number2 multiplied
 **/
function multiplyTwoNumbers(number1, number2 ) {
  const result = number1 * number2
  console.log(result)
  return result
}

const value = multiplyTwoNumbers(2,3)
console.log("final value", value)

/**
 * A simple function that takes two strings concatenates  them and returns the result
 * @param {string} string1 the first string to be concatenated
 * @param {string} string2 the second string to be concatenated
 * @return {string} the result of concatenating string1 and string2
 **/
function concatenateTwoStrings(string1, string2) {
  const result = string1 + " " + string2

  return result
}

const firstString = "I am a string"
const secondString = "that has been concatenated"

const finalValue = concatenateTwoStrings(firstString, secondString)

console.log(finalValue)

//Functions are the main unit of computation that we will be using in this class
//Functions can have names that we use to call/execute them
// Functions take arguments/parameters from the outside world that can be used inside the function
// Using the return keyword we can have a value computed inside the function exposed to the outside world


function addition(number1, number2) {
  return number1 + number2
}

console.log(addition(1, 4))


