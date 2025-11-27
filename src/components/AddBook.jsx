import { useState } from "react";

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      author,
      read: false
    });

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>

      <input
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddBookForm;
