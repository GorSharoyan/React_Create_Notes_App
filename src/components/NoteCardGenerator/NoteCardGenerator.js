import React, { useState, useEffect } from "react";

//Services
import { getAllData } from "../../services/firebase.servie";

//Components
import NoteCard from "../NoteCard/NoteCard";

export default function NoteCardGenerator() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getAllData().then((result) => {
      let parsedValues = Object.values(result);
      setNotes(parsedValues);
    });
    console.log(notes);
  }, []);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handelEditNote = () => {
    console.log("click");
  };

  return (
    <div>
      {notes.map((element) => {
        return (
          <ul key={element.id}>
            <NoteCard
              note={element}
              handleEditNote={() => {
                handelEditNote();
              }}
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
