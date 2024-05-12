// Regular or General way to define function
function hellobol(name) {
        return `Kasa aahes ${name} ?`;

}

// Anonymous function : function is stored in variable ap.
let ap = function(num) {
        let sum = 0;
        while(num>0){
                sum+=num;
                num-=1;
        }
        return sum;
}

// Arrow function => simple way to define a function where function is stored in variable savkar.
let savkar = (p,r,t) => {
        sp = (p*r*t)/100 ;
        return sp
}

// Function invoked or Function calling
let myname = hellobol('Bhawa');
console.log(myname);
console.log(ap(100));
console.log(savkar(10000,3,12));