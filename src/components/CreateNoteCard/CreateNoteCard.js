import React from "react";

//UI
import "./CreateNoteCard.css";
import { Typography, Card, CardContent, Button } from "@material-ui/core";

export default function CreateNoteCard() {
  return (
    <Card className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Make Your Note
        </Typography>
        <div>
          <div className="input-box">
            <div className="heading">Heading</div>
            <div id="heading-input">
              <input></input>
            </div>
          </div>
          <div className="input-box">
            <div className="heading">Description</div>
            <div className="input">
              <textarea></textarea>
            </div>
          </div>
          <div id="button">
            <Button variant="contained">Add Note</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
