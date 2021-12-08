import React, { useState } from "react";

//Services
import { getData } from "../services/fetch.service";
//Components
import NoteCard from "../NoteCard/NoteCard";

export default function NoteCardGenerator() {
  [notes, setNotes] = useState([]);

  setNotes(getData());

  return (
    <div>
      {notes.map((element) => {
        return (
          <NoteCard
            heading={element.heading}
            description={element.description}
          />
        );
      })}
    </div>
  );
}
