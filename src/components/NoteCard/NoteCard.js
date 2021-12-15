import React, { useState } from "react";

//UI
import "./NoteCard.css";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

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
          {note.heading}
        </Typography>
        <div>
          <div style={{ fontSize: "15px" }}>{note.description}</div>
          <div>
            <Button onClick={handleDeleteNote}>
              Delete Note <DeleteForeverIcon></DeleteForeverIcon>
            </Button>
          </div>
          {!edit ? (
            <div>
              <Button onClick={handleEditToggle}>
                Edit Note<CreateIcon></CreateIcon>
              </Button>
            </div>
          ) : (
            <div>
              <input placeholder={note.id} onChange={handleInputChange}></input>
              <Button onClick={handleEditNote}>
                Submit<DoneOutlineIcon></DoneOutlineIcon>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
