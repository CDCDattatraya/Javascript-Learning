function make(a,b,c){
        a = [1,3,5];
        b = 6;
        c[1] = 2;
}

let x = [2,4,6]; // If we change argument variable itself then original variable will not change.
let y = 3;
let z = [28,29,30]; // If we change internals of argument variable then original variable will be changed.

make(x,y,z)
console.log(x,y,z);