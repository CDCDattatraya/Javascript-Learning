let multiply = function (x, y) {
        p = x * y;
        return p;
}

let add = function (x, y) {
        s = x + y;
        return s;
}



let action = function (x, y, z) {
        r = z(x, y);
        return r;
}

let c = action(27, 7, multiply); // Result:189 
// The Function multiply is given as an argument to action function called 'callback'
console.log(c);