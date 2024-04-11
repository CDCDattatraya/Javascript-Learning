//object methods

const car = {
    brand: "tesla",
    model: "model3",
    goTo: function (destination) {
      console.log(`Going to ${destination}`)
    },
  }
  
  car.goTo("work")

// pass objects as parameters and return objects from a function

const printNameAndAge = ({ name, age }) => {
    console.log(name, age)
  }
  
  const person = {
    name: 'ironman',
    age: 30
  }
  
  printNameAndAge(person)

//using 'this' keyword - access propetties and methods of the object

const car1 = {
    brand: "tesla",
    model: "model3",
    start: function () {
      console.log(`Started
            ${this.brand} ${this.model}`)
    },
  }
  car.start()

const car2 = {
  brand: "tesla",
  model: "model3",
  start: () => {  // does not work with arrow function
    console.log(`Started
      ${this.brand} ${this.model}`)
  },
}
car.start()

const persons = {
    firstName: 'tom',
    lastName: 'jerry',
    actor: true,
    age: 10,
  }
  const { firstName, age } = person
    console.log(firstName, age)

