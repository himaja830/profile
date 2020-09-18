import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function LoginCard() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Card
        className={classes.root}
        variant="outlined"
        style={{
          textAlign: "center",
          borderColor: "black",
          width: "50%",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <div className={classes.title} color="textSecondary">
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontStyle: "oblique",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                Email:
              </h3>
              <TextField
                variant="outlined"
                id="standard-basic"
                label="Email:"
                style={{ color: "black" }}
              />
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <a href="/profile" className="btn btn-primary">
              Login
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
