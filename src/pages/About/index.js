import React from "react";
import { useIntl } from "react-intl";
import Page from "material-ui-shell/lib/containers/Page";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo_300x250.png";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
  page: {},
}));

const About = () => {
  const intl = useIntl();

  const classes = useStyles();
  return (
    <Page
      pageTitle={intl.formatMessage({ id: "about", defaultMessage: "About" })}
      className={classes.page}
    >
      <Paper className={classes.paper}>
        <h1>Hello!</h1>
        <h3>4Cast is a new app designed to help plan for the future.</h3>
        <img src={logo} alt='logo' />
        <p>
          We are a continually developing platform focused on helping
          individuals and business plan fo the future. By using the magic
          thinkalator, we analyze time series data to provide informed
          forecasting.
        </p>
        <p>Come Plan With Us!</p>
      </Paper>
    </Page>
  );
};
export default About;
