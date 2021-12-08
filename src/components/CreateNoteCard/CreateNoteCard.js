import { React, useState } from "react";

//UI
import "./CreateNoteCard.css";
import { Typography, Card, CardContent, Button } from "@material-ui/core";

//Services
import { postData, getData } from "../services/fetch.service";

export default function CreateNoteCard() {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = () => {
    let note = { heading, description };
    postData(note);
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Make Your Note
        </Typography>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="input-box">
              <div className="heading">Heading</div>
              <div id="heading-input">
                <input
                  value={heading}
                  onChange={(e) => {
                    setHeading(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="input-box">
              <div className="heading">Description</div>
              <div id="description-input">
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div id="button">
              <Button variant="contained" onClick={handleFormSubmit}>
                Add Note
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
