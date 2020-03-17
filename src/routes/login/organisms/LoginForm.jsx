import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "75% 10px 0 10px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const LoginForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [passport, setPassport] = useState("");

  const onKeyPress = e => {
    if (e.keyCode === 13) {
      onSubmit(passport);
    }
  };

  return (
    <Paper className={classes.root} onKeyDown={onKeyPress}>
      <InputBase
        className={classes.input}
        placeholder="Passport Serials"
        inputProps={{ "aria-label": "passport serials" }}
        value={passport}
        onChange={e => setPassport(e.target.value.toUpperCase())}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        onClick={() => onSubmit(passport)}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Paper>
  );
};

export default LoginForm;
