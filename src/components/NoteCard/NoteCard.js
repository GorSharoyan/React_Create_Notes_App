import React, { useState } from "react";

//UI
import "./NoteCard.css";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

export default function NoteCard({ note, handleDeleteNote, handleEditNote }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const handleEditToggle = () => {
    setEdit(true);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Card className="note-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {note.id}
        </Typography>
        <div>
          <div>{note.id}</div>
          <div>
            <Button onClick={handleDeleteNote}>Delete Note</Button>
          </div>
          {!edit ? (
            <div>
              <Button onClick={handleEditToggle}>Edit Note</Button>
            </div>
          ) : (
            <div>
              <input placeholder={note.id} onChange={handleInputChange}></input>
              <Button onClick={handleEditNote}>Submit</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
