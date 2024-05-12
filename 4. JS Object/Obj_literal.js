let student01 = {
        name: 'Datta',
        age: 23,
        city: 'Latur',
        namste : function() {
            let intro =`Hello My name is ${this.name} and I am ${student01.age} yrs old.`
            /* We can access properties of object by using 
            'this'(inside object can access only) keyword or 'object_name' 
            with dot(.) OP or square bracket[].  */     
            console.log(intro);
        } // Function in objects called methods of that object

    };

student01.skills = 'Frontend developer';
console.log(student01.name);
console.log(student01);

    

    