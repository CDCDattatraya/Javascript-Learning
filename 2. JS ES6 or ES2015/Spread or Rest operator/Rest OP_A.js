//Spread or Rest OP in function
function sum(...nums) {
        return nums.reduce((acc, curr) => acc + curr, 0);
      }
console.log(sum(1, 2, 3, 4)); // Result: 10

// Spread OP is used to extract values from an array 

const roll_no = [25,26,27,28,29,30,31];
let [Hemant, Prachi, Avdhut, ...rest] = roll_no ;

console.log(Hemant);
console.log(Avdhut);
console.log(rest);

// spread operator with objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}; // colour is replaced with yellow

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdatedVehicle);
