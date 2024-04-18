# A] JS Basic

**JavaScript** is the most powerful and versatile programming language used in the web. It is a **lightweight**, **cross-platform**, **single-threaded** and **interpreted** programming language. It is a commonly used programming language to create dynamic and interactive elements in web applications.

## 1.Variable

Variables are containers for data. A JavaScript variable can hold any type of data.

```jsx
name = "U turn shirt";
price = 379;
rating = 5;
deal_of_day = true;

console.log("Variables");
console.log("\t - Case sensitives (apple and Apple both are different.)");
console.log("\t - Only $ and _ special symbols allowed to define a variable.");
console.log("\t - Reserve words(keywords) are not allowed.")
console.log("\t - Example : price is variable, value assigned for it is " + price)
```

## 2. Data types

### **a) Primitive Data Types**:

- **String**: Represents textual data, enclosed in single ('') or double ("") quotes.
- **Number**: Represents numeric data, including integers and floating-point numbers.
- **Boolean**: Represents a logical value, either **`true`** or **`false`**.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: Introduced in ECMAScript 6, represents unique identifiers.

```jsx
// Primitive data types
let str = 'Hello'; // String
let num = 42; // Number
let bool = true; // Boolean
let undef = undefined; // Undefined
let nul = null; // Null
let sym = Symbol('symbol'); // Symbol

```

### b) **Reference Data Types**:

- **Object**: Represents a collection of key-value pairs. Objects can be created with curly braces **`{}`** or using constructors like **`new Object()`**.
- **Array**: Represents a collection of elements, which can be of any data type. Arrays are created with square brackets **`[]`**.
- **Function**: Represents reusable blocks of code. Functions can be declared using the **`function`** keyword or created using arrow functions introduced in ECMAScript 6.
- **Date**: Represents dates and times. Dates are created using the **`Date`** constructor.
- **RegExp**: Represents regular expressions for pattern matching. Regular expressions are created using the **`RegExp`** constructor.
- **Others**: JavaScript also has other reference data types like **`Map`**, **`Set`**, **`WeakMap`**, **`WeakSet`**, etc., introduced in ECMAScript 6.

```jsx
// Reference data types
let obj = { key: 'value' }; // Object
let arr = [1, 2, 3]; // Array
function greet() { console.log('Hello!'); } // Function
let date = new Date(); // Date
let regex = /[a-z]+/; // RegExp
```