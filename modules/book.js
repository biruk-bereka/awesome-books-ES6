import { setToLocalStorage, getFromLocalStorage } from './updateBooks.js';

export default class Book {
  constructor() {
    this.booksCollection = [];
  }

  #setBooks = (books) => setToLocalStorage(books);

  #getBooks = () => getFromLocalStorage();

  updatedBooksStorge = (book) => {
    this.booksCollection = this.#getBooks();
    this.booksCollection.push(book);
    this.#setBooks(this.booksCollection);
  };

  addBook() {
    const newBook = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    this.updatedBooksStorge(newBook);
    this.displayBook();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  deleteBook = (bookIndex) => {
    let bookUpdated;
    if (bookIndex !== null) {
      const books = this.#getBooks();
      bookUpdated = books.filter((book, index) => index !== Number(bookIndex));
      this.#setBooks(bookUpdated);
      this.displayBook();
    }
  };

  displayBook = () => {
    const books = this.#getBooks();
    const booksContainer = document.querySelector('.books');
    booksContainer.innerHTML = '';

    if (books.length === 0) {
      booksContainer.innerHTML = 'No book available for now';
      return;
    }

    for (let i = 0; i < books.length; i += 1) {
      booksContainer.innerHTML += `
          <div id="book-${i}" class="book">
          <p>"${books[i].title}" by ${books[i].author}</p>
          <button type="button" class="remove" data-index= "${i}">Remove</button>
          </div>
          `;
    }
    const removeButton = document.querySelectorAll('.remove');
    removeButton.forEach((btn) => {
      btn.addEventListener('click', () => this.deleteBook(btn.dataset.index));
    });
  };
}
