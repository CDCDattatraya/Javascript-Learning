// objects - fundamental, built-in data strecture

// create an object- ways

const cycle = {}
const bus = new Object()
const truck = Object.create({})

//object properties

const car = { //Defining multiple properties
    color: 'blue',
    'the color': 'blue'
  }

  car.color // getting the value of the property
  car['the color']

  car['color'] = 'red' //setting the value of the property

  car.model = 'Fiesta' // adding new property
  console.log(car.model)

  delete car.model // deleting the property
  
  const anotherCar = car // objects are passed by reference
anotherCar.color = "yellow"
car.color

//