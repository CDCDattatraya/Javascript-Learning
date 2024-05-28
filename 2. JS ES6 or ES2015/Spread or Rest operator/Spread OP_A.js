// It allows us to collect indefinite no. of arguments passed to a function in the form array

let addition = function(...data) {
        let sum = 0;
        data.forEach(function(e){
                sum += e ;
        })
        return sum;
}

let prime = addition(2,3,5,7,11,13,17,19,23,29,31);
console.log(prime);

// appending element using spread OP
var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2); // Result:[10, 20, 30, 40, 50, 60]