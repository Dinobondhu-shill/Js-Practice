let sentence = "There Was A TimE, WhEn we usEd to Play in EvEry EvEning";
let count_a = 0;
let count_E = 0;

for(let char of sentence){
  if(char === 'a'){
    count_a++;
  }
  else if(char ==='E'){
    count_E++;
  }
}
console.log("Number of a are appears :", count_a);
console.log("Number of E are appears :", count_E);