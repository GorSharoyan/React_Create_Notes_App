import React from "react";

//UI
import "./NoteCard.css";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

export default function NoteCard({ heading, description }) {
  return (
    <Card className="note-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {heading}
        </Typography>
        <div>
          <div>{description}</div>
          <div>
            <Button>Delete Note</Button>
          </div>
          <div>
            <Button>Edit Note</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
