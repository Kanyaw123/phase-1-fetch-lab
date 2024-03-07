function fetchBooks() {
  // Fetch request to 'https://anapioficeandfire.com/api/books'
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Parse the JSON response
    .then(data => renderBooks(data)); // Pass the JSON object to renderBooks()
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
