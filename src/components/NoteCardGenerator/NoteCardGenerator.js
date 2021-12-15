import React, { useState, useEffect } from "react";

//Services
import { getAllData } from "../../services/firebase.servie";

//Components
import NoteCard from "../NoteCard/NoteCard";

export default function NoteCardGenerator() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllData().then((result) => {
      let parsedValues = Object.values(result);
      setNotes(parsedValues);
    });
  }, [notes]);

  return (
    <div>
      {notes.map((element) => {
        return (
          <ul key={element.id}>
            <NoteCard note={element} />
          </ul>
        );
      })}
    </div>
  );
}
