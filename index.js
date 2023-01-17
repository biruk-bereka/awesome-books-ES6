import Navigation from './modules/navigation.js';
import Book from './modules/book.js';

Navigation();

const book = new Book();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  book.addBook();
});

book.displayBook();
