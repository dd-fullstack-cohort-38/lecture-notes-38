let myArray = [5, 3, 9, 2]

let myDoubledArray = myArray.map(
  // function (myArrayElement){return myArrayElement * 2}
  myArrayElement => myArrayElement * 2
)

console.log(myDoubledArray)