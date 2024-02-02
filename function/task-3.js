// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
  const size = numbers.length;
  let total = 0;
  for(const number of numbers){
    total = total + number / size
    
  }
  console.log(total);
  return total;
}


const numbers = [42, 52, 2, 63, 15, 85, 16, 91];
const avg_array = make_avg(numbers);