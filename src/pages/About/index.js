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
        <img src={logo} alt='logo' />
        <h2>
          Are you counting widgets, fidgets, rocks, socks, or stocks over time?
          Or, any value tracked over time? Then 4Cast is the place to see what
          the future might bring.
        </h2>
      </Paper>
    </Page>
  );
};
export default About;
