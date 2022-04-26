// The dot is used to access a value in an object in JavaScript.

let car = {
  make: 'Bugatti',
  model: 'M Type',
  color: 'black',
  cylinders: '10',
  drive: () => console.log('vroom'),
  driveFast: () => console.log('VROOM VROOM'),
}

console.log(car.make)
car.driveFast()

let myArray = [1, 3, 7]

myArray.map(element => console.log(element * 2))

