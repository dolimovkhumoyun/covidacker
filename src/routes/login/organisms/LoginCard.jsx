import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LoginForm from "./LoginForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "35vh",
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30
  }
});

const LoginCard = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          Covidacker
        </Typography>
        <LoginForm onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
