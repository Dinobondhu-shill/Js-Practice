let weight = 66;
let height = 1.67*2;
let bmi = weight / height;
if(bmi <18.5) {
  console.log('You are underweight')
}
else if(bmi >= 18.5 || bmi >=24.5){
  console.log('you are normal')
}
else{
  console.log('you are overweight')
}