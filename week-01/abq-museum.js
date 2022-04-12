// get age
// NM resident?
// Foundation Member?

// if foundationMember = true
//   price = 0
// else if age < 4
//   price = 0
// else if age < 13
//   price = 3
// else if age < 65
//   if nmResident = true
//     price = 5
//   else
//     price = 6
// else
//   price = 4
// display price


const age = 18
const nmResident = true
const foundationMember = false

let price

if (foundationMember === true){
  price = 0
}else if (age < 4){
  price = 0
}else if (age < 13){
  price = 3
}else if (age < 65) {
  if (nmResident === true) {
    price = 5
  }else {
    price = 6
  }
}else{
  price = 4
}

console.log(price)


