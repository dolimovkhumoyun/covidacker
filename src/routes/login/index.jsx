import React, { useState, useEffect } from "react";
import "./atoms/index.scss";
import LoginCard from "./organisms/LoginCard";
import { Grid } from "@material-ui/core";
import { getUser } from "./api/index";
import ConfirmDialog from "./molecules/CustomDialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = props => {
  const [passport, setPassport] = useState("");
  const [open, setOpen] = useState(false);
  const [isAlert, setAlert] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user_id");
    if (user !== null) {
      props.history.push("/main");
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onConfirm = e => {
    setOpen(false);
    getUser(passport, props.history);
  };

  const onSubmit = value => {
    if (value.length <= 8) setAlert(true);
    else {
      setOpen(true);
      setPassport(value);
    }
  };

  return (
    <div className="main">
      <Grid container direction="row" justify="center" alignItems="center">
        <LoginCard onSubmit={onSubmit} />
        <ConfirmDialog
          isOpen={open}
          onClose={handleClose}
          onOpen={handleClickOpen}
          onConfirm={onConfirm}
          passport={passport}
        />
        <Snackbar
          open={isAlert}
          autoHideDuration={6000}
          onClose={() => setAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={() => setAlert(false)} severity="error">
            Паспорт рақами камида 8 та белгидан иборат бўлиши керак!
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default Login;
