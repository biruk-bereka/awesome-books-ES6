const setToLocalStorage = (books) => localStorage.setItem('Books', JSON.stringify(books));

const getFromLocalStorage = () => {
  const books = JSON.parse(localStorage.getItem('Books'));
  if (books) return books;
  return [];
};

export { setToLocalStorage, getFromLocalStorage };