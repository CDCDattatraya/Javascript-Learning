"use strict"
let student1 = {
        Datta : 2001,
        Vikas : 2002,
        Ajay : 2003
}
// for in loop is used for JS Objects.
for(let e in student1){
        console.log(e,"born in",student1[e]);
}