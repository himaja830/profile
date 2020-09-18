import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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

function Profile() {
  const classes = useStyles();
  return (
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
              <div>Name: Himaja Sriramaneni</div>
              <div>Email: himaja.sriramaneni@gmail.com</div>
              <div>phone-No: 512-905-5117</div>
            </h3>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <a
            href="https://docs.google.com/document/d/11v37kPWDHTsm2Bg489NAQPUUfPvB_cr3_qrk-cm_6Hk/edit?usp=sharing"
            className="btn btn-primary"
          >
            Resume
          </a>
        </Button>

        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <a
            rel="noopener noreferrer"
            href="http://www.ravens.io/"
            className="btn btn-primary"
            target="_blank"
          >
            ravenseye
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Profile;
