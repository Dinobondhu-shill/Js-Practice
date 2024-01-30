// Sum Of odd Number using for loop
let sum=0;
for(num = 61; num <=129; num++){
  if(num % 2 !==0){
    console.log(num);
    sum = sum+num;
    console.log("The sum is :", sum);
  }
}
// Sum of even number using for loop

let sum1= 0;
for(num1=51; num1 <=85; num1++){
  if(num1 % 2===0){
    console.log(num1, "+", sum1, "=", sum1+num1)
    sum1= num1+sum1;
  }
}