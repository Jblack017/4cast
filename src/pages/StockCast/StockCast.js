import Page from "material-ui-shell/lib/containers/Page";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import UserPlotly from "graphs/UserPlotly";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  textField: { margin: theme.spacing(3) },
  button: { margin: theme.spacing(3) },
}));

const StockCasts = () => {
  const intl = useIntl();
  const classes = useStyles();
  const [stockSymbol, setStockSymbol] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(stockSymbol);
  };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "stock_cast",
        defaultMessage: "Stock Cast",
      })}
    >
      <Scrollbar className={classes.scrollbar}>
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={4} sm={4}>
            <form
              className={classes.textField}
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit}
            >
              <TextField
                id='stock'
                label='Required'
                variant='filled'
                value={stockSymbol}
                onChange={event => setStockSymbol(event.target.value)}
                required={true}
                type='text'
              />
            </form>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Button
              className={classes.button}
              size='large'
              variant='contained'
              color='secondary'
              onClick={handleSubmit}
            >
              Cast
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <UserPlotly />
            </Paper>
          </Grid>
        </Grid>
      </Scrollbar>
    </Page>
  );
};
export default StockCasts;
