// class definitions
class Book {
    constructor(title, author, id) {
        this.title = titleField.value;
        this.author = authorField.value;
        this.id = id;
    }
}

class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static insertBook(book){
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBook(id) {
        const books = Store.getBooks();
        books.forEach((book,index) => {
            if(book.id === id) {
                books.splice(index,1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));

    }


}

// function definitions
const addBook =function (e){    
    e.preventDefault();
    title = titleInput.value;
    author = authorInput.value;
    id = bookCollection.length + 1;

    let book = new Book(title, author, id);
    bookCollection.push(book);

    titleInput.value = '';
    authorInput.value = '';

}

function removeBook(){}
function addBookToList(){
    bookCollection.forEach( (element) => {

        let libDiv = document.createElement('div');
        libDiv.innerHTML = `
            <p>${element.title}</p>
            <p>${element.author}</p>
            <button id="${element.id}">Remove</button>
        `
        library.appendChild(libDiv);
    } )
    

}

// variable declarations
const bookCollection = [];
const library = document.querySelector('.book-library');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const addButton = document.querySelector('.addBtn');

// add event listeners
addButton.addEventListener('click', addBook());

