import React from "react";
import { Grid } from "@material-ui/core";
import ProfileInfo from "./organisms/ProfileInfo";

import { makeStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
    marginLeft: theme.spacing(32),
    color: "white",
    backgroundColor: "#34B696",
    "&:hover": {
      color: "white",
      backgroundColor: "#34B696"
    }
  }
}));

const Profile = props => {
  const classes = useStyles();

  const onLogout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <Grid container>
      <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
        <ProfileInfo />
        <Fab aria-label="add" className={classes.root} onClick={onLogout}>
          <ExitToAppOutlinedIcon />
        </Fab>
      </div>
    </Grid>
  );
};

export default Profile;
