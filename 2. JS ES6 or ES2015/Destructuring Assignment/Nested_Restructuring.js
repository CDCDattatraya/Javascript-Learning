//Nested Restructuring 
let user = {
        id: 09,
        userDetails: {
          name: 'Datta',
          age: 23,
          address: {
            city: 'Latur',
            country: 'India'
          }
        }
      };
      
      let { id, userDetails: { name, address: { city } } } = user;
      
      console.log(id);   // Result: 09
      console.log(name); // Result: 'Datta'
      console.log(city); // Result: 'Latur'