const developers = [
  {name:'shariar', age:30, position:'senior', nickName:'gedu'},
  {name:'obaydul', age:20, position:'junior', nickName:'medu'},
  {name:'rahim', age:22, position:'senior', nickName:'ledu'},
  {name:'munem', age:23, position:'junior', nickName:'fedu'},
  {name:'masum', age:28, position:'senior', nickName:'kedu'}
]
// Your Task is display the position that has senior in this array of object using filter method

const positionName = developers.filter(developer => developer.position ==='senior')
const instructorsName = positionName.map(instructor => instructor.name);
console.log(instructorsName)