// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiplyOrDivided(numbers){
  let  result = 0;
  if(numbers % 2 !==0){
    result = numbers * 2;
    
  }
  else{
    result = numbers/2;
  }
  console.log(result);
  return result;
  
}

const number = 50;
const result = multiplyOrDivided(number)