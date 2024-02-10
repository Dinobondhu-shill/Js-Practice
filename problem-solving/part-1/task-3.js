// Write a function to count the number of vowels in a string.
function vowelCount (str){
  let number=0;
  for(const word of str){
    if(word == 'a' || word === "e" || word === "i" || word === "o" || word === "u"){
      number = number+1;
    }
  }
  console.log(number);
}
const str = "equivelentau"
const result = vowelCount(str);