function hellobol(name) {
        return `Kasa aahes ${name} ?`;

}

let ap = function(num) {
        let sum = 0;
        while(num>0){
                sum+=num;
                num-=1;
        }
        return sum;
}

let savkar = (p,r,t) => {
        sp = (p*r*t)/100 ;
        return sp
}

let myname = hellobol('Bhawa');
console.log(myname);
console.log(ap(100));
console.log(savkar(10000,3,12));