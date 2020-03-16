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
    fontSize: 14
  }
});

const LoginCard = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* Please enter your Passport Serial */}
        </Typography>
        <LoginForm onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
