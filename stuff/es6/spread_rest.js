// Spread Operator with Objects

const person = {
    name: 'batman',
    age: 30,
    country: 'metaverse'
  };
  
  const job = {
    title: 'devops',
    company: 'cdc'
  };
  
  // Combining objects using spread operator
  const employee = { ...person, ...job };
  console.log(employee);
  // Output: { name: 'batman', age: 30, country: 'metaverse', title: 'devops', company: 'cdc'}
  
  // Removing properties using spread operator and rest parameter
  const { country, ...personalInfo } = employee;
  console.log(personalInfo);
  // Output: { name: 'batman', age: 30, title: 'devops', company: 'cdc'}
  