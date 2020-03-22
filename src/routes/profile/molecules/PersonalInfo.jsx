// React
import React from "react";

// Custom

// Third-party
import { makeStyles } from "@material-ui/core/styles";

// Material-ui components
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// Icon
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "94vw",
    height: "35vh",
    marginLeft: "3vw",
    textAlign: "center"
  },
  container: {
    textAlign: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  list: {
    marginTop: 50
  }
}));

const PersonalInfo = ({ passport }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent style={{ marginBottom: 30 }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.list}
        >
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" component="h3">
                {passport}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Паспорт рақами
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
