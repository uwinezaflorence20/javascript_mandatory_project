var libooks = [
    {
        bookid:1,
        bookname: 'Mechanical engineering',
        author: 'pacifique',
        available  : true

    },
    {
        bookid:2,
        bookname: 'physycology',
        author: 'magnifique',
        available : true

    },
    {
        bookid:3,
        bookname: 'medecine',
        author: 'pacifique',
        available : false

    }
];
console.log(libooks);
// function to add new book to the library
 function addNewBook() {
    Push.libooks();
    console(addNewBook);
}
var books = {
    bookid:4,
    bookname: 'biology',
    author: 'Adeliphine',
    available : false  
};
var books1 = {
    bookid:5,
    bookname: 'chemistry',
    author: 'erneste',
    available : true  
}
libooks.push(books);
libooks.push(books1)
//console.log(libooks);

//this function is meant to list all the available books in the library array and log them to the console.
const listAllAvailableBooks = () => {
    var available = libooks.filter(book => book.available === true);
    console.log(available);
}
listAllAvailableBooks();

// Function to borrow a book and return it 
function borrowBook(bookId) {
    const book = libooks.find(b => b.bookid === bookId);
    if (!book) {
      console.log('Book not found');
      return;
    }
  
    if (!book.available) {
      console.log(`${book.bookname} Book is available you can borrow it`);
      return;
    }
  
    book.available = false;
    console.log(` ${book.bookname} book has been borrowed`);
 };
 borrowBook(4);

 function returnBorrowedBook(bookid) {
    var bookIndex = libooks.findIndex(book => book.bookid === bookid);
    if (bookIndex !== true) {
        libooks[bookIndex].available = true;
        console.log('Book returned successfully');
    } else {
        console.log('Book not found');
    }
}

returnBorrowedBook(4);

// in case you try to borrow unvailable book

