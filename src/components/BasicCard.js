import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
      <Card elevation={10} sx={{ minWidth: 275 }}>
        <CardContent color="secondary">
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">{props.action}</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup color="secondary" variant="outlined">
            <Button>Yes</Button>
            <Button>No</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
  );
}
