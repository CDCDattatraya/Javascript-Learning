// find() - find an item in the array


a.find((element, index, array) => { //syntax
    //return true or false
  })

const itemFound = items.find((item) => item.name === 'b')

//example

const colors = ['Green', 'Blue', 'Yellow', 'Orange']

const greenColor = colors.find(color => color.startsWith('G'))

if (greenColor) console.log(`Found Green Color: ${greenColor}`)
else console.log("No green color found.")

//findIndex() - find the index of an item in the array

a.findIndex((element, index, array) => { //syntax
    //return true or false
  })

  const index = items.findIndex((item) => item.name === 'b')

//example

const colors1 = ['Green', 'Blue', 'Yellow', 'Orange']

const yellowIndex = colors.findIndex(color => color === 'Yellow');

if (yellowIndex !== -1) {
  console.log(`Index of 'Yellow' color: ${yellowIndex}`);
} else {
  console.log("'Yellow' color not found in the array.");
}

//foreach() - similar to map() but does not return a new array

const list = [1, 2, 3]

list.forEach(element => {
  console.log(element * 2)
})



