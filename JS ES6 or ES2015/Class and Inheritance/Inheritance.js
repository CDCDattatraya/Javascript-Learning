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
      
      