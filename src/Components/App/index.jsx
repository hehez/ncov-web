import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header, Footer } from "../Layouts";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    fontSize: 10,
    flexGrow: 1,
    // maxWidth: 360,
    backgroundColor: theme.palette.background.Header
  },
  inline: {
    display: "inline-block"
  },
  Paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const section = {
  height: "90%",
  paddingTop: 30,
  backgroundColor: "#fff"
};

const App = props => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [articleListData, setArticleListData] = useState([]);
  const [chinaTotalData, setChinaTotalData] = useState([]);

  useEffect(() => {
    fetch("api/wuhan/6")
      .then(response => response.json())
      .then(d => {
        setData(d);
        setArticleListData(d.articleList);
        setChinaTotalData(d.chinaTotal);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <Grid container spacing={3}>
        {articleListData.map(item => (
          <Grid item xs={3} spacing={3}>
            <Paper
              className={classes.paper}
              elevation={4}
              variant="elevation"
              style={section}
            >
              {`${item.publish_time} | ${item.desc}`}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default App;
