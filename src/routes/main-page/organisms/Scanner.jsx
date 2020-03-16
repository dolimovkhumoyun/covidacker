import React, { useState } from "react";
import QrReader from "react-qr-reader";

const Scanner = () => {
  const [result, setResult] = useState("");

  const handleScan = data => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = err => {
    console.error(err);
  };
  console.log(result);
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 375, width: "100vw" }}
      />
      <p style={{ marginTop: "30%" }}>{result}</p>
    </div>
  );
};

export default Scanner;
