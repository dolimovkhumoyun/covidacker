// React
import React from "react";

// Custom

// Third-party
import { makeStyles } from "@material-ui/core/styles";

// Material-ui components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

// Icons
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    height: "25vh",
    marginLeft: "12%",
    position: "relative",
    top: "20px",
    backgroundColor: "#34B696",
    boxShadow: "rgb(52, 182, 216) 0px 6px 18px 0px"
  },
  user_avatar: {
    marginLeft: "42%",
    color: theme.palette.getContrastText("#FF5722"),
    backgroundColor: "#FF5722"
  },
  heading: {
    color: "white",
    marginTop: 35,
    fontWeight: "bold"
  }
}));

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar className={classes.user_avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h5" component="h2" className={classes.heading}>
          Profile Information
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
