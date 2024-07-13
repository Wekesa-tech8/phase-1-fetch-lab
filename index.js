function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) 
    .then((json) => renderBooks(json)) 
    .catch((error) => console.error("Error fetching data:", error)); 
}

function renderBooks(books) {
  const booksContainer = document.getElementById('books');

  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.textContent = book.name; 
    booksContainer.appendChild(bookItem);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);