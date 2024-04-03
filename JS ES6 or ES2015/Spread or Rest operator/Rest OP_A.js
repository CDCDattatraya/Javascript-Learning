//Rest OP
function sum(...nums) {
        return nums.reduce((acc, curr) => acc + curr, 0);
      }
      console.log(sum(1, 2, 3, 4)); // Result: 10