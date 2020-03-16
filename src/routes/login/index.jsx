import React from "react";
import "./atoms/index.scss";
import LoginCard from "./organisms/LoginCard";
import { Grid } from "@material-ui/core";

const Login = props => {
  const onSubmit = e => {
    console.log(e);
    props.history.push("/dashboard");
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
