// Write an algorithm that runs from 1 to 20. When the number is even, output 'fizz'. When the number is divisible by 5, output 'buzz'. If it is neither even nor divisible by five, output 'foo'.

// for loop i from 1 to 20
// if i % 2 === 0
//   if i % 5 === 0
//     output 'fizz buzz'
//   else
//     output 'fizz'
// else if i % 5 === 0
//   output 'buzz'
// else
//   output 'foo'

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    if (i % 5 === 0) {
      console.log('fizz buzz', i)
    } else {
      console.log('fizz', i)
    }
  } else if (i % 5 === 0) {
    console.log('buzz', i)
  } else {
    console.log('foo', i)
  }
}

// Given two numbers, write an algorithm that outputs the sum of all odd numbers between those numbers, inclusive.

// declare number1 and number2
// declare sum = 0
// for i = number1 to number 2, step by 1
//   if i % 2 !== 0
//      add i to sum
// output sum