import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const LoginForm = ({ onSubmit }) => {
  const [passport, setPassport] = useState("");

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={8}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={passport}
          onChange={e => setPassport(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={() => onSubmit(passport)}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
