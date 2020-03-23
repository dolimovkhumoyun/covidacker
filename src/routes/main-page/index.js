import React, { useEffect } from "react";
import Scanner from "./organisms/Scanner";

const Main = props => {
  useEffect(() => {
    let user = localStorage.getItem("user_id");
    if (user === null) {
      props.history.push("/");
    }
  }, []);

  return <Scanner history={props.history} />;
};

export default Main;
