import React, { useState, useEffect } from "react";

//Services
import { getAllData, postData } from "../../services/fetch.service";

//Components
import NoteCard from "../NoteCard/NoteCard";

export default function NoteCardGenerator() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllData().then((result) => {
      setNotes(result);
    });
  }, []);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      {notes.map((element) => {
        return (
          <ul key={element.id}>
            <NoteCard
              heading={element.id}
              handleDeleteNote={() => {
                handleDeleteNote(element.id);
              }}
            />
          </ul>
        );
      })}
    </div>
  );
}
