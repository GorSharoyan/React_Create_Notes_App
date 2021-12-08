import React, { useState, useEffect } from "react";

//Services
import { getAllData } from "../../services/fetch.service";
//Components
import NoteCard from "../NoteCard/NoteCard";

export default function NoteCardGenerator() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllData().then((result) => {
      setNotes(result);
    });
  }, []);

  return (
    <div>
      {notes.map((element) => {
        return <NoteCard heading={element.id} />;
      })}
    </div>
  );
}
