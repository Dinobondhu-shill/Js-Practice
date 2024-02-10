// Write a function to find the longest word in a given string.
function longWord(sentence){
  let broke = sentence.split(' ');
  let longestWord = '';
  for(const item of broke){
    if(item.length > longestWord.length){
      longestWord = item;
    }
  }
  console.log(longestWord);
}
const sentence = "I am learning Programming to become a programmer"
const longestWord = longWord(sentence);