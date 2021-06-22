import React from "react";
import { useIntl } from "react-intl";
import Page from "material-ui-shell/lib/containers/Page";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
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
        <h3>
          Are you counting widgets, fidgets, rocks, socks, or stocks over time?
          Or, any value tracked over time? Then 4Cast is the place to go look at
          what the future might bring.
        </h3>
      </Paper>
    </Page>
  );
};
export default About;
