//cloning objects

const a = { dog: { name: 'test' } } //using spread operator
const b = { ...a }
a.dog.name= 'good dog'
b.dog.name

const d = { dog: { name: 'test' } } //using structuredclone() 
const c = structuredClone(a)
d.dog.name= 'good dog'
c.dog.name

//sorting an array of objects   

const persons = [
    { name: 'a', age: 40 },
    { name: 'b', age: 30 },
    { name: 'c', age: 20 },
  ]
  persons.sort((a, b) => a.age - b.age)  //sort()
  console.log(persons)

//mergint two objects

const object1 = {
    name: 'man'
  }
  
  const object2 = {
    age: 30
  }
    const object3 = {...object1, ...object2 }



