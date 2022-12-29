import React from "react";
import BasicCard from "./BasicCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const data = require("./data/questions.json");

export default function Cards() {
  return (
    <div>
      <Grid container spacing={3}>
        {data.map((question) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <BasicCard
                title={question.title}
                shortTitle={question.shortTitle}
                action={question.action}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
