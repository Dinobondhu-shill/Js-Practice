// sum of odd numbers
let num = 81;
let sum =0;
while(num <131){
  if(num % 2 ===1){
    console.log(num)
    sum = sum + num
    console.log("sum is :", sum)
  }
  num++;
}
// sum of even numbers
let num = 206;
let sum = 0;
while(num < 312){
  if(num % 2 ===0){
    console.log(num)
    sum = sum+num;
    console.log("The sum is :", sum)
  }
  num++
}