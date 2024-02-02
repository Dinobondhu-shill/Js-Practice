// Create a function that will only return the even numbers of an array..


function even (numbers){
  let evenArray =[];
  for(let number of numbers){
    if(number%2 === 0){
     evenArray.push(number);
    }
    
  }
  console.log(evenArray);
  return evenArray;
}
const numbers = [12, 25, 28, 45, 68, 965, 47, 78];
const fCall = even(numbers)