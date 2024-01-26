let score = 35;
let friend = 33;
if (score >= 80) {
  if (friend > 80){
    console.log('lets go for a lunch')
  }
  else if(friend <80 && friend >=60){
    console.log('Better luck next time')
  }
  else if(friend<60 && friend >=40){
    console.log('Massage will be unseen')
  }
  else{
    console.log('Unfriend!')
  }
} 
else {
  console.log('Go Home and sleep')
}