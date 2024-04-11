//array init ways

const a = []
const b = [1, 2, 3]
const c = [1, 'chrome', ['a', 'b']] // object

const x = [1, 2, 3] //number of items in array
a.length

const fruits0 = ['banana', 'pear', 'apple'] //creating subarray
const morefruits = [...fruits]
console.log(morefruits)

const fruits = ['banana', 'pear', 'apple'] 

fruits.push('mango')//adding an item to an array

fruits.unshift('orange') // adding an item to the beginning of an array

fruits.pop() //removing the last item from an array

fruits.splice(2, 1) //remove the item at index 2

// matrix - array of array 

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  matrix[0][0] //1
  matrix[2][0] //7

//searching for an item in an array

const list = [1, 2, 3, 4] 

list.includes(1) //true
list.includes(5) //false


