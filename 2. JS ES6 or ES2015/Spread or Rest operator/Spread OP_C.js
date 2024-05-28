// two array merged together using spread OP
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Result: [1, 2, 3, 4, 5, 6]

console.log(combined);
combined.forEach((e) => {
        console.log(e);
})

// It allows us to collect indefinite no. of arguments passed to a function in the form array

let addition = function(a, b, ...data) {
        let sum = a+b;
        data.forEach(function(e){
                sum += e ;
        })
        return sum;
}

let prime = addition(2,3,5,7,11,13,17,19,23,29,31);
console.log(prime);