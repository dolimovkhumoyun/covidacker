import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { sendPostId } from "../api";

const Scanner = props => {
  const [result, setResult] = useState("");

  const handleScan = data => {
    if (data) {
      alert(data);
      setResult(data);
      // sendPostId(data, props.history);
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
    </div>
  );
};

export default Scanner;
