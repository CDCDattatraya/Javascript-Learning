# JS ES6 or ES2015 Concepts

## Javascript Classes & Inheritance

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

## Spread / Rest Operators

The spread and rest operators are essential features in JavaScript for handling arrays and function parameters. Both having same syntax but differ in functions.

### **Spread Operator (`...`)**

- The spread operator expands an iterable (e.g., an array) into its individual elements.
- It's commonly used for array manipulation, such as concatenation or copying arrays.

```jsx
// two array merged together using spread OP
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Result: [1, 2, 3, 4, 5, 6]
```

```jsx
// appending element using spread OP
var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2); // Result:[10, 20, 30, 40, 50, 60]
```

```jsx
// copying the object using spread OP
const obj = {
                firstname: "Datta",
                lastname: "Mundhe",
        };
const obj2 = { ...obj };
        console.log(obj2);

```

### **Rest Parameter (`...`)**

- The rest parameter collects multiple elements into a single array.
- It's useful when working with variable numbers of function arguments.

```jsx
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Result: 10

```