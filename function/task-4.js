
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryStr){
  let countZero = [];
  for(zero of binaryStr){
    if(zero == 0){
      zeroLength = countZero.push(zero);
    }
    
  
  }
  console.log(zeroLength);
  return zeroLength;
}

const binary = "010100010100011101010";
const binaryCall = count_zero(binary)

