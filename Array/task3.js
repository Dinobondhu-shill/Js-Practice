// Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let book = ['bangla', 'english', 'math', 'programming', 'ebook', 'goology', 'data structure and algorithm'];
book.includes('javascript')
console.log(book);
if(book.includes('javascript')){
  console.log('Yes ! Your book is listed to us . please come and take this')
}
else{
  console.log("Sorry bro! I will add in this item tomorrow")
}