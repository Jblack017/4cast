import Page from "material-ui-shell/lib/containers/Page";
import React from "react";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import { useIntl } from "react-intl";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
  },
  scrollbar: { height: "70%", width: "70%", display: "flex", flex: 1 },
}));

const HomePage = () => {
  const intl = useIntl();

  const classes = useStyles();

  return (
    <Page pageTitle={intl.formatMessage({ id: "home" })}>
      <Scrollbar className={classes.scrollbar}>
        <Paper>
          <h1>Hi. Welcome Home</h1>
        </Paper>
      </Scrollbar>
    </Page>
  );
};
export default HomePage;
