import React from "react";

//Components
import NoteCardGenerator from "../components/NoteCardGenerator/NoteCardGenerator";
import CreateNoteCard from "../components/CreateNoteCard/CreateNoteCard";

export default function Home() {
  return (
    <body>
      <div>
        <CreateNoteCard />
      </div>
      <div>
        <NoteCardGenerator />
      </div>
    </body>
  );
}
