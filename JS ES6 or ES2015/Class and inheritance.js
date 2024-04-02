class Animal {
        constructor(name) {
          this.name = name;
        }
      
        speak() {
          console.log(`${this.name} makes a sound.`);
        }
      }
      
      let dog = new Animal('Dog');
      dog.speak(); // Output: 'Dog makes a sound.'
      
/*
      // Inheritance

      class Dog extends Animal {
        constructor(name, breed) {
          super(name); // Call the constructor of the superclass
          this.breed = breed;
        }
      
        speak() {
          console.log(`${this.name} barks.`);
        }
      
        displayBreed() {
          console.log(`${this.name} is a ${this.breed}.`);
        }
      }
      
      let goldenRetriever = new Dog('Moti', 'Golden Retriever');
      goldenRetriever.speak();     // Output: 'Moti barks.'
      goldenRetriever.displayBreed(); // Output: 'Moti is a Golden Retriever.'
      
      */

      /*

      // Use of super keyword => to access parent class methods

      class Dog extends Animal {
        constructor(name, breed) {
          super(name); // Call the constructor of the superclass
          this.breed = breed;
        }
      
        speak() {
          super.speak(); // Call the speak method of the superclass
          console.log(`${this.name} barks.`);
        }
      }

      */

/*

// Static Methods
class MathOperations {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(MathOperations.add(5, 3));      // Output: 8
console.log(MathOperations.subtract(5, 3)); // Output: 2

*/