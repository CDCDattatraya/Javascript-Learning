//classes and object

class Person { //class declaration
    name = 'linux'
  }
const linux = new Person() //initialize the object

linux.name = 'linux' //access the name
console.log(linux.name) 

//class methods

class Person0 {
    hello() {
      return 'Hello, I am windows'
    }
  }
  
  const windows = new Person0()
  windows.hello() //Hello, I am windows
  

//private class properties

class Counter {
    #count = 0
  
    increment() {
      this.#count++
    }
    getCount() {
      return this.#count
    }
  }
  
  const counter = new Counter()
  
  counter.increment()
  counter.increment()
  
  console.log(counter.getCount())

//inheritance

class Car { //parent class
    constructor() {
      console.log('This is a car')
    }
  }

    class Ford extends Car { //child class
        constructor() {
        super()
        console.log('This is a Ford')
        }
    }

    const myCar = new Ford() //calling the child class
