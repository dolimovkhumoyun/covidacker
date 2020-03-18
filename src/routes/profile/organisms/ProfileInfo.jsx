// React
import React from "react";

// Custom
import InfoCard from "../molecules/InfoCard";
import PersonalInfo from "../molecules/PersonalInfo";

// Third-party
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    textAlign: "center"
  },
  name: {
    width: "80%"
  }
});

const ProfileInfo = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.name}>
        <InfoCard />
      </Grid>
      <Grid item>
        <PersonalInfo passport={"AA 1234567"} />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
