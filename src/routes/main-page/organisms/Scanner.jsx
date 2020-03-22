import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { sendPostId } from "../api";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Scanner = ({ history }) => {
  const [isScanned, setIsScanned] = useState(false);
  const [isAlert, setAlert] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleScan = data => {
    if (data && !isScanned) {
      if (data.includes("post_id=")) {
        setIsScanned(true);
        let post_id = data.split("=")[1];
        sendPostId(post_id, setIsScanned, setAlert, history);
      } else {
        setAlert(true);
      }
    }
  };
  const handleError = err => {
    console.error(err);
  };
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 375, width: "100vw" }}
      />

      <Snackbar
        open={isAlert}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setAlert(false)} severity="error">
          QrCode xato
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Scanner;
