// Write a function for specify  odd and  even numbers of an array..
let oddNumbers =[];
let evenNumbers = [];
function onlyodd(numbers){
  for(const number of numbers){
    if(number % 2 !==0){
      oddNumbers.push(number);
      
    }
    else{
      evenNumbers.push(number);
      
    }
   
  }
  console.log("Odd Number are:",oddNumbers);
  console.log("Even Number are:", evenNumbers);
}


const numbers = [47, 85, 65, 85, 46, 24, 62, 35, 18];
onlyodd(numbers);