// Loop through an object and print the key-value pairs with their types.
let myObject = {

  name: 'John Doe',
  age: 25,
  city: 'Rangpur',
  isStudent: true
  };

  for(let i in myObject){
    console.log(i, ":", myObject[i], "|", "type:", typeof(myObject[i]));
  }