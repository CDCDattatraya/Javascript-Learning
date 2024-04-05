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
      
