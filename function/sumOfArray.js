function arrayOfSum(numbers){
  let sum = 0;
  for(let number of numbers){
    sum = sum + number;
  }
  console.log(sum);
  return sum;
  

}
const array = [14, 19, 22, 85, 52];
const sumofarray = arrayOfSum(array);