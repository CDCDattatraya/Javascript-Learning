//strings 

const test = 'A string'
const test2 = "Another string"

const apple = "A" + " " + "string" // + operator to join

const mango = `something` //templet literal using backtick

//multiline strings

const app = `a string  
defined
on multiple lines using backtick symbol`

//string substitution with ${}

const variable = 1
const one = `a string with the number ${variable}`
const two = `a string with the number ${variable + 10}`

/*
toUpper
tolower
length
trim
split
replace
search
substring
substr
concat
*/

//toUpper

const upper = 'a string'.toUpperCase()
console.log(upper)

//split

const split = 'a string'.split(' ')
console.log(split)

//replace

const replace = 'a string'.replace('a', 'another')
console.log(replace)