import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title || !content) return;
    setNotes([...notes, { id: uuidv4(), title, content }]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Notes App</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textarea"
      />
      <button onClick={addNote} className="button">Add Note</button>
      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-content">{note.content}</p>
            <button onClick={() => deleteNote(note.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
