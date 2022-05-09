let myString: string = 'I am a string.'
myString = '1'
console.log(myString)

let exampleArray: Array<number> = [1, 2, 3, 4, 6]

let exampleArrayWithNumbersAndStrings: Array<number | string> = [1, 2, 3, 'I also contain a string']

function returnFirstValue (myArgument: number[]): number {
  return myArgument[0]
}

console.log(returnFirstValue(exampleArray))

const arrowFunctionExample = (myArgument: number[]): number => myArgument[0]

type MyObject = {
  one: number,
  two: string,
  three: {nestedValue: any}
}

let myObject: MyObject = {
  one: 111,
  two: 'I am a string',
  three: {nestedValue: 'I can be any data type'}
}

interface Student {
  firstName: string,
  lastName: string,
  grade: number | null
}

let student: Student = {
  firstName: 'Deon',
  lastName: 'Butler',
  grade: null
}

console.log(`${student.firstName} ${student.lastName} has a grade of ${student.grade}`)
