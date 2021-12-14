import { React, useState } from "react";

//UI
import "./CreateNoteCard.css";
import { Typography, Card, CardContent, Button } from "@material-ui/core";

//Services
import { createData } from "../../services/firebase.servie";

export default function CreateNoteCard() {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [note, setNote] = useState({});

  const handleFormSubmit = () => {
    // if (heading || description === "") {
    //   setError(true);
    // } else {
    let note = { heading, description };
    setNote(note);
    createData("/Notes", note, 4);
    // document.location.reload();
    // }
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
            {error ? (
              <div id="error-message">Please Fill in the fields above</div>
            ) : (
              <></>
            )}
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
