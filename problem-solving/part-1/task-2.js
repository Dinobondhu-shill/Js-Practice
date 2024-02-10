// You are given an array of numbers. Count how many times the a number is repeated in the array.

function count (numbers){
  let hello = {};
  for(const number of numbers){
    if(hello[number]){
      hello[number]++;
    }
    else{
      hello[number] = 1;
    }
  }
  console.log(hello);
}
let arrayOfNumber = [10, 20, 44, 88, 44, 50,10, 52, 44, 20, 58, 88];
const countNumber = count(arrayOfNumber);