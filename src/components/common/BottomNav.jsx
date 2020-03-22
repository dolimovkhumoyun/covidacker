import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";
import CropFreeRoundedIcon from "@material-ui/icons/CropFreeRounded";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    height: 70,
    bottom: 0,
    backgroundColor: "#5AB1EF"
  },
  menu: {
    color: "white"
  }
});

const BottomNav = () => {
  const [location, setLocation] = useState("");
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    setLocation(history.location.pathname);
  }, [history.location.pathname]);

  const handleChange = (event, newValue) => {
    setLocation(newValue);
    history.push(`${newValue}`);
  };

  return (
    <BottomNavigation
      value={location}
      onChange={handleChange}
      position="fixed"
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="Сканер"
        value="/main"
        icon={<CropFreeRoundedIcon />}
        style={{ color: "white" }}
      />
      <BottomNavigationAction
        label="Жадвал"
        value="/main/table"
        icon={<EditLocationOutlinedIcon />}
        style={{ color: "white" }}
      />
      <BottomNavigationAction
        label="Харита"
        value="/main/map"
        icon={<ExploreOutlinedIcon />}
        style={{ color: "white" }}
      />
      <BottomNavigationAction
        label="Профил"
        value="/main/profile"
        icon={<PersonOutlinedIcon />}
        style={{ color: "white" }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
