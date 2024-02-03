// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFar(Celsius){
  const fahrenheit = (Celsius* 9/5) + 32;
  console.log(fahrenheit)
  return fahrenheit;
  
}

const Celsius = 30;
const output = celToFar(Celsius)