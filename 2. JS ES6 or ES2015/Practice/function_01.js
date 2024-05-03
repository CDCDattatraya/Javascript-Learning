let multiply = function(x,y){
p = x*y;
return p;
}

let add = function(x,y){
        s = x+y;
        return s;
        }

let a =5;
let b =4;

let action = function(x,y,z){
        r = x-y;
        return r;
        }

let c = action(a,b,add); // Result: 1
console.log(c);