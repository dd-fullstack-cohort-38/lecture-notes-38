let people = [
  {
    name: 'Mirjam',
    cars: [
      {
        make: 'Audi',
        model: 'A6',
        value: 72000
      },
      {
        make: 'BMW',
        model: 'M3',
        value: 70000
      },
      {
        make: 'VW',
        model: 'Jetta',
        value: 25000
      }
    ]
  },
  {
    name: 'Stephen',
    cars: [
      {
        make: 'Tesla',
        model: 'Model 3',
        value: 81000
      },
      {
        make: 'Porsche',
        model: '911',
        value: 90500
      },
      {
        make: 'Range Rover',
        model: 'Sport',
        value: 87000
      }
    ]
  },
  {
    name: 'Marty',
    cars:[
      {
        make: 'VW',
        model: 'Karmen Gia',
        value: 24000
      },
      {
        make: 'Ford',
        model: 'Transit',
        value: 23000
      },
      {
        make: 'Bugatti',
        model: 'M Type',
        value: 120000
      },
      {
        make: 'VW',
        model: 'Golf',
        value: 4200
      }
    ]
  }
]

console.log(people[0])
console.log(people[0].cars)
console.log(people[0].cars[2])

let peopleWithNumberOfCars = people.map(person=>{
  return {name: person.name, numberOfCars: person.cars.length}
})

console.log(peopleWithNumberOfCars)

people.forEach(
  person => person.cars.forEach(
    car => console.log( car.make + ' ' + car.model + ' worth ' + car.value )
  )
)

let peopleAndMostValuableCar = people.map(
  person => {
   return {name: person.name, mostValuableCar: person.cars.reduce(
       (mostValuableCar, currentCar) => {
         // return mostValuableCar.value < currentCar.value ? currentCar : mostValuableCar
         if (mostValuableCar.value < currentCar.value){
           return currentCar
         }else{
           return mostValuableCar
         }
       }
     )}
  }
)

console.log(peopleAndMostValuableCar)