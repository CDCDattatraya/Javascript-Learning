//anonymous function have not any name. stored in variable

let compare = function (a,b){
        if (a>b){
                return a;
        }
        else{
                return b;
        }

};

let a = compare(12345,2345);//

console.log(a);