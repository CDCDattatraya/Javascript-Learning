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