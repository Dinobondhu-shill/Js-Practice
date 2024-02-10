const heights = [45, 48, 42, 52, 65, 66, 72, 48, 59];

function getMin (heights){
  let min = heights[0];
  for(const num of heights){
    if(num < min){
      min = num;
    }
  }
  console.log(min);
}
const lowestHeight = getMin(heights);