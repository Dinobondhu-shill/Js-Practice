// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
  if(number % 2 === 0){
    Even = number;
    console.log("Even");
    return Even;
  }
  else{
    Odd = number;
    console.log("Odd");
    return Odd
  }
}

const value = 999;
const callOdd_even = odd_even(value);