export function selectBook(book) {
  // Select book is an Action creator, it needs to return an action,
  // an object with a type property and related action data/ payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
