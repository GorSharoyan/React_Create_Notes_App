import React, { useState } from "react";

//UI
import { Card, CardContent, Typography, Button } from "@material-ui/core";

//Services
import { getData } from "../services/fetch.service";

export default function NoteCard({ heading, description }) {
  return (
    <Card>
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
