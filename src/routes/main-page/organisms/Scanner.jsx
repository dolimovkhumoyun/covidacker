import React from "react";
import QrReader from "react-qr-reader";
import { sendPostId } from "../api";

const Scanner = ({ history }) => {
  const handleScan = data => {
    if (data) {
      alert(data);
      let post_id = data.split("=")[1];
      sendPostId(post_id, history);
    }
  };
  const handleError = err => {
    console.error(err);
  };
  console.log(history);
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 375, width: "100vw" }}
      />
    </div>
  );
};

export default Scanner;
