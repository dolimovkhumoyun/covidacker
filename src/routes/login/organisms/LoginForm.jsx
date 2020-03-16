import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import CustomMaskedInput from "../molecules/MaskedInput";
import FormControl from "@material-ui/core/FormControl";

const LoginForm = ({ onSubmit }) => {
  const [passport, setPassport] = useState("");

  const onChange = e => {
    setPassport(e.target.value);
  };

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={8}>
        <FormControl>
          <InputLabel htmlFor="formatted-text-mask-input">Passport Serials</InputLabel>
          <Input
            value={passport}
            onChange={onChange}
            id="formatted-text-mask-input"
            inputComponent={CustomMaskedInput}
          />
        </FormControl>
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
