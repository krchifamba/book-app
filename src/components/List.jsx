import { useState } from "react";
import AddBookForm from "./AddBook.jsx";

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: "Dune", author: "Frank Herbert", read: false },
    { id: 2, title: "1984", author: "George Orwell", read: true },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", read: false },
    { id: 4, title: "Fahrenheit 451", author: "Ray Bradbury", read: true },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", read: false },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", read: true },
    { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", read: false },
    { id: 8, title: "The Great Gatsby", author: "F. Scott Fitzgerald", read: true }
  ]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, book]);
  };

  const toggleRead = (id) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, read: !b.read } : b))
    );
  };
  
  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div>
      <h2>Books</h2>

      <AddBookForm onAdd={addBook} />

    <table>
    <thead>
        <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Status</th>
        <th>Actions</th>
        </tr>
    </thead>

    <tbody>
        {books.map((b) => (
        <tr key={b.id}>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.read ? "Read" : "Unread"}</td>

            <td>
            <button onClick={() => toggleRead(b.id)}>
                {b.read ? "Mark Unread" : "Mark Read"}
            </button>

            <button onClick={() => deleteBook(b.id)}>
                Delete
            </button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>

    </div>
  );
}

export default BookList;
