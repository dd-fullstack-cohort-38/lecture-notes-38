/*
In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed.
*/
// input "42 is The anSwer to lifE"
//declare function removeVowels(string)
  // convert string to an array and assign it variable stringArray
  // declare variable newString
  // loop over stringArray one value at time
     // if stringArray[i].toLowerCase() does not contain "aeiou"
        // newString = newString + stringArray[i]
    // end if
  //end loop
  // return newString

/**
* Write a function that takes an array of numbers and returns the greatest number in the array.
**/
function findGreatestNumber (myNumbers) {

  // Set our initial number.
  let greatestNumber = Number.NEGATIVE_INFINITY;

  // Iterate over our array.
  myNumbers.forEach(number => {

    // Compare our current number against the greatest number so far.
    if (number > greatestNumber) {
      greatestNumber = number;
    }
  });

  // Return our greatest number
  return greatestNumber;
}

console.log(findGreatestNumber([2, 40, -3]));
// Result: 40

console.log(findGreatestNumber([-3, -10, -1]));
// Result -1


/**
* Write a function that computes the first 100 numbers in the Fibonacci sequence.
**/
function fibonacciHundred () {

  // Declare our array and some helper values.
  let fibonacciArray = [0, 1];
  let previousNumber = 0;
  let thisNumber = 1;

  // Loop over our array until we get 100 values.
  for (i=3; i<=100; i++) {

    // Calculate our next value in the sequence and add it to our array.
    let nextNumber = previousNumber + thisNumber;
    fibonacciArray.push(nextNumber);

    // Set our numbers to the last known numbers.
    previousNumber = thisNumber;
    thisNumber = nextNumber;
  }

  // Return our Fibonacci sequence.
  return fibonacciArray;
}

console.log(fibonacciHundred());