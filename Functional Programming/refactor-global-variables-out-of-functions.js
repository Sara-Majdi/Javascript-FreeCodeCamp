// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let returnBookList = [...bookList];
  returnBookList.push(bookName);
  return returnBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let returnBookList = [...bookList];
  const book_index = returnBookList.indexOf(bookName);
  if (book_index >= 0) {

    returnBookList.splice(book_index, 1);
    return returnBookList;

    // Change code above this line
    }
}
