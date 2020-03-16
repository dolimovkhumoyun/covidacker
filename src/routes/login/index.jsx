import React from "react";
import "./atoms/index.scss";
import LoginCard from "./organisms/LoginCard";
import { Grid } from "@material-ui/core";
import { getUser } from "./api/index";

const Login = props => {
  const onSubmit = value => {
    if (/^([a-zA-Z]{2}\d{7})$/.test(value)) {
      getUser(value, props.history);
    }
  };

  return (
    <Grid container>
      <div className="container">
        <LoginCard onSubmit={onSubmit} />
      </div>
    </Grid>
  );
};

export default Login;
