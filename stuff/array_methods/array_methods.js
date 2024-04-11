//map() -  creating a new array from an existing one

var new_array = array.map(function callback(element, index, array) { //syntax
    // Return value for new_array
})

//example 

const number = [1, 2, 3, 4]
const doubled = number.map(item => item * 2)
console.log(doubled)

//filter() - takes each element in an array and it applies a conditional statement

var new_array = array.filter(function callback(element, index, array) { //syntax
    // Return true or false
})

//example

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

//reduce() - reduces an array of values down to just one value

var new_array = array.reduce(function callback(accumulator, currentValue, index, array) { //syntax
    // Return the new value for accumulator
}, initialValue)

//example

const numbers1 = [1, 2, 3, 4, 5]
const sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(`Sum of numbers: ${sum}`)

