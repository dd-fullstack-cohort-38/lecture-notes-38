// How to make json?

let person = {
  name: 'Bob',
  heightInInches: 70,
  weightInPounds: 180
}

console.log(person.weightInPounds)
person.weightInPounds = 170
console.log(person.weightInPounds)

let anotherPerson = {}

anotherPerson.name = 'Mary'
anotherPerson.heightInInches = 65
anotherPerson.weightInPounds = 140
console.log('anotherPerson', anotherPerson)
console.log('person', person)

let arrayOfPeople = [person, anotherPerson]
console.log(arrayOfPeople)
console.log({data: arrayOfPeople})