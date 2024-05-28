// SIMPLE WAY TO INITAILIZE ARRAY
let a = ["HTML", "CSS", "JS", "PYTHON", "DBMS"];
a[5] = "DJANGO"; // ADDING NEW ELEMENT IN ARRAY AT INDEX 5
a[4] = "BOOTSTRAP"; // EDITING ELEMENT AT INDEX -1
for (let element_index in a) {
        console.log(element_index + " : " + a[element_index]); // 'for of loop' PRINT ELEMENT_INDEX OF ARRAY 1 BY 1
}
        


// INITIALIZING ARRAY BY USING 'new Array' METHOD
let connection = new Array("Gayatri", "Poonam", "Nisha", "Avdhut");
console.log(typeof (connection)); // ARRAYS ARE OBJECTS
connection.push("Pratiksha");
connection.push("Samarth"); // 'array.push()' METHOD ADDS ELEMENT AT LAST
console.log(connection); 
connection.pop(); // 'array.pop()' METHOD DELETES LAST ELEMENT OF ARRAY
console.log(connection);

for (let element of connection) {
        console.log(element); // 'for of loop' PRINT ELEMENT OF ARRAY 1 BY 1
}