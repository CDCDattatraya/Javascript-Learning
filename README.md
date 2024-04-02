# Javascript Classes & Inheritance

Classes and Inheritance provide a way to create reusable and organized code by defining blueprints for objects and sharing behavior between them. Classes and inheritance provide a way to organize and structure code in JavaScript, making it easier to maintain and extend. They are commonly used in object-oriented programming in JavaScript. The concept of classes and inheritance was introduced in ECMAScript 2015 (ES6).

### Classes

A class in JavaScript is a blueprint for creating objects or we can say it is template for JavaScript Objects with similar properties and methods. It encapsulates data for the object and the operations that can be performed on the data. Classes are defined using the **`class`** keyword. Always add a method named `constructor()`

```jsx
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

```

### **Constructor Method**

The constructor method is a special method:

- It has to have the exact name "constructor".
- It is executed automatically when a new object is created.
- It is used to initialize object properties.

If you do not define a constructor method, JavaScript will add an empty constructor method.

### **Inheritance**

Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This promotes code reusability and allows for the extension and specialization of existing classes. Subclasses can override inherited methods or define new methods.

```jsx
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

```

### **Super Keyword**

The **`super`** keyword is used to call methods on the superclass within the subclass. It's used both in constructors to call the superclass constructor and in methods to call superclass methods.

```jsx
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

```

### **Static Methods**

Static methods are defined on the class itself rather than on the prototype. They are called on the class rather than on instances of the class.

```jsx
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

```