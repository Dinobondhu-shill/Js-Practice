


document.getElementById('comment-btn').addEventListener('click', function(){
  const commentContent = document.getElementById('comment');
  const newComment = commentContent.value;
  const commentSection = document.getElementById('comment_section');
const comment = document.createElement('p');
  comment.innerText = newComment;
  commentSection.appendChild(comment);
  commentContent.value ='';
})