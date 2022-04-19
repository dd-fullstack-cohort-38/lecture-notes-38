
function add (number1, number2){
  return number1 + number2
}

let sum = add(3, 4)
console.log('the value in the variable "sum" is ' + sum)

let multiply = (number1, number2) => number1 * number2
console.log('5 * 3 = ', multiply(5, 3))

let sayMyName = name => console.log(name)
sayMyName('Heisenberg!')

