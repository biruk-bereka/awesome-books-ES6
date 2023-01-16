
export default function navigtion() {
    const bookListLink = document.getElementById('book-lists');
    const bookFormLink = document.getElementById('book-form');
    const contactInfoLink = document.getElementById('contact-info');
    const bookSection = document.querySelector('.books-section');
    const formSection = document.querySelector('.form-section');
    const contactSection = document.querySelector('.contact-section');
    
    bookListLink.addEventListener('click', () => {
      bookListLink.classList.add('active');
      bookFormLink.classList.remove('active');
      contactInfoLink.classList.remove('active');
    
      bookSection.classList.remove('invisible');
      formSection.classList.add('invisible');
      contactSection.classList.add('invisible');
    });
    
    bookFormLink.addEventListener('click', () => {
      bookListLink.classList.remove('active');
      bookFormLink.classList.add('active');
      contactInfoLink.classList.remove('active');
      bookSection.classList.add('invisible');
      formSection.classList.remove('invisible');
      contactSection.classList.add('invisible');
    });
    
    contactInfoLink.addEventListener('click', () => {
      bookListLink.classList.remove('active');
      bookFormLink.classList.remove('active');
      contactInfoLink.classList.add('active');
      contactInfoLink.classList.add('active');
      bookSection.classList.add('invisible');
      formSection.classList.add('invisible');
      contactSection.classList.remove('invisible');
    });    
} 
