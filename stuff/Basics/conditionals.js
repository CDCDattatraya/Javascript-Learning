// if statement

var x = 10;
var y = 20;
if (x > y) {
  console.log('x is greater than y');
}

// else statement

let x = 10;
let y = 20;
if (x > y) {
  console.log('x is greater than y');
}
else {
  console.log('x is less than y');
}

// else if statement

const x = 10;
const y = 20;
if (x > y) {
  console.log('x is greater than y');
}
else if (x < y) {
  console.log('x is less than y');
}
else {
    console.log('x is equal to y');
    }

// switch statement

let x = 10;
switch (x) {
  case 10:
    console.log('x is 10');
    break;
  case 20:
    console.log('x is 20');
    break;
  default:
    console.log('x is not 10 or 20');
}

// ternary operator

//<condition> ? <expression> : <expression>

const running = true
(running === true) ? console.log('stop') : console.log('run')

