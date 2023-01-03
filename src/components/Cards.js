import React, { useState, useEffect } from "react";
import BasicCard from "./BasicCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Cards() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getJson().then(list => setList(list));
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {list.map((question) => (
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

async function getJson() {
  try {
    const response = await fetch('https://financial-walkthrough-data.s3.amazonaws.com/questions.json', {
      method: "GET"
    })
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
