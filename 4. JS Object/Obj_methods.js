let person = {
        name: 'Datta',
        age: 23,
        greet: function() {
            console.log('Hello, my name is ' + this.name);
        }
    };
    person.greet(); // Output: 'Hello, my name is Datta'
    