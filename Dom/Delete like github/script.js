document.getElementById('input_field').addEventListener('keyup', function(event){
  const text = event.target.value;
 if(text === "delete"){
  const buttonActive = document.getElementById('del-btn');
  buttonActive.removeAttribute('disabled', false);
 }
 else{
  buttonActive.setAttribute('disabled', true);
 }
})

document.getElementById('del-btn').addEventListener('click', function(){
  const deleteItem = document.getElementById('repository-3');
  deleteItem.remove();
})