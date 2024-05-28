// 'array.forEach()' METHOD DECLARATION 
const price = [1217, 240, 40, 10];
price.forEach(
        function (element) {
                console.log(element);
        }
)

// ALTERNATIVE WAY TO DECLARE 'array.forEach()' METHOD 
let laxya = new Array("Hamal De Dhamal", "Dhadakebaz", "De Danadan");
let movie = (Marathi) => {
        console.log(Marathi);
}

laxya.forEach(movie);

// 'array.map()' METHOD TO CREATE NEW ARRAY FROM ARRAY
let n = new Array(1,2,3,4,5,6,7,8,9,10);

let table = n.map(x => x*24);
console.log(table);

let m = table.forEach((e) =>{
        console.log(e);
}) ;


// 'array.filter()' METHOD TO CREATE NEW ARRAY FROM ARRAY 

let ds = new Array(1,2,3,4,5,6,7,8,9,10);

let even_no = ds.filter(x => x%2==0);
console.log(even_no);

let cd = even_no.forEach((e)=> {
        console.log(e);
});

console.log(`Length of Array Even no. ${even_no.length}`);


