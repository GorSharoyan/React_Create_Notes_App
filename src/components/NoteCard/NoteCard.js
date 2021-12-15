import React, { useState } from "react";

//UI
import "./NoteCard.css";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

//Services
import { updateData } from "../../services/firebase.servie";

export default function NoteCard({ note }) {
  const [edit, setEdit] = useState(false);
  const [headingInput, setHeadingInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleEditToggle = () => {
    setEdit(true);
  };

  const handleHeadingInputChange = (event) => {
    setHeadingInput(event.target.value);
  };
  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value);
  };

  const handleEditNote = () => {
    const editedNote = { heading: headingInput, description: descriptionInput };
    updateData(note.id, editedNote);
    document.location.reload();
  };

  const handleDeleteNote = () => {
    updateData(note.id, null);
    document.location.reload();
  };

  // const handleDeleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // };

  // const handelEditNote = () => {
  //   console.log("click");
  // };

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
            <div className="edit-form">
              <input
                className="note-input"
                placeholder={note.heading}
                onChange={handleHeadingInputChange}
              ></input>

              <textarea
                className="note-input"
                placeholder={note.description}
                onChange={handleDescriptionInputChange}
              ></textarea>
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
