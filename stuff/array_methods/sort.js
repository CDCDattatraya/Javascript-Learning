//sort() - sort an array

const a = ['b', 'd', 'c', 'a'] // alphabetical order
a.sort()

const b = [1, 2, 3, 10, 11] // does not work for numbers
a.sort() //1, 10, 11, 2, 3

const c = [1, 'a', 'Z', 3, 2, 11] // works on ascii values
b.sort() //1, 11, 2, 3, Z, a

// sort numbers - custom function

const d = [1, 4, 3, 2, 5] 
a.sort((a, b) => (a > b ? 1 : -1)) //1, 2, 3, 4, 5

a.reverse() //reverse the sort
