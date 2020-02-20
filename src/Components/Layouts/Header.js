import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  typography: {
    // marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          paragraph="true"
          variant="h3"
          className={classes.typography}
          color="textPrimary"
        >
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
