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
import csv from "csv";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    fontSize: "2em",
  },
  scrollbar: { height: "70%", width: "70%", display: "flex", flex: 1 },
  textField: { margin: theme.spacing(3) },
  button: { margin: theme.spacing(3) },
}));

const StockCast = () => {
  const intl = useIntl();
  const classes = useStyles();
  const [stockSymbol, setStockSymbol] = useState("TSLA");
  const [xAxis, setXAxis] = useState(null);
  const [projectionLower, setProjectionLower] = useState(null);
  const [projection, setProjection] = useState(null);
  const [projectionUpper, setProjectionUpper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalQuote, setGlobalQuote] = useState({});
  const [loadingMessage, setLoadingMessage] = useState(
    "Search a ticker symbol above"
  );

  const baseURL = "https://www.alphavantage.co/query?";
  const intraDayTS = "function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
  const globalQuoteURL = "function=GLOBAL_QUOTE&symbol=";
  const outputSize = "&outputsize=full";
  const apiKey = "&apikey=N1URRPJ42UJODY8Y";

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    setLoadingMessage(`Pulling ${stockSymbol} from Alpha Vantage`);
    fetchStockData();
  };

  const fetchStockData = () => {
    console.log();
    fetch(baseURL + intraDayTS + stockSymbol + outputSize + apiKey)
      .then(response => response.json())
      .then(stockObj => parseStockObj(stockObj["Time Series (Daily)"]))
      .then(stockData => fetchFourCast(stockData))
      .then(
        fetch(baseURL + globalQuoteURL + stockSymbol + apiKey)
          .then(response => response.json())
          .then(setGlobalQuote)
      );
  };

  const parseStockObj = stockObj => {
    let stockData = [];
    setLoadingMessage(`Parsing ${stockSymbol}`);
    for (let property in stockObj) {
      const record = [property, parseFloat(stockObj[property]["1. open"])];
      stockData.push(record);
    }
    stockData.unshift(["Date", "Open"]);
    return stockData;
  };

  const fetchFourCast = stockData => {
    const stockObject = { data: stockData };
    setLoadingMessage(`Sent ${stockSymbol} to FB Prophet on Heroku`);
    fetch("https://four-cast-app.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stockObject),
    })
      .then(response => response.json())
      .then(forecast => parseForecast(forecast));
  };

  const parseForecast = forecast => {
    csv.parse(forecast.data, (err, data) => {
      console.log(data);
      if (!err) {
        let xAxisValues = [];
        let projLower = [];
        let projected = [];
        let projUpper = [];
        data.shift();
        data.forEach(row => {
          if (row) {
            xAxisValues.push(row[1]);
            projected.push(parseFloat(row[2]).toFixed(2));
            projLower.push(parseFloat(row[3]).toFixed(2));
            projUpper.push(parseFloat(row[4]).toFixed(2));
          }
        });
        setXAxis(xAxisValues);
        setProjection(projected);
        setProjectionLower(projLower);
        setProjectionUpper(projUpper);
        setLoadingMessage(`${stockSymbol} loaded`);
        setLoading(false);
      } else {
        console.error(err);
        setLoading(false);
      }
    });
  };

  // const handleReset = () => {
  //   // location.reload();
  //   // setStockSymbol("TSLA");
  //   // setXAxis(null);
  //   // setProjectionLower(null);
  //   // setProjection(null);
  //   // setProjectionUpper(null);
  // };

  const handleSave = () => {
    let stockObject = {
      project: "5",
      stock_sym: stockSymbol.toString().toUpperCase(),
      x_axis_array: xAxis.toString(),
      proj_low_array: projectionLower.toString(),
      proj_high_array: projection.toString(),
      proj_array: projectionUpper.toString(),
    };
    fetch("http://localhost:3000/graphs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stockObject),
    })
      .then(response => response.json())
      .then(console.log);
  };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "cast_stock",
        defaultMessage: "Cast Stock",
      })}
    >
      <Scrollbar className={classes.scrollbar}>
        <Grid container spacing={1} className={classes.grid}>
          {!xAxis ? (
            <>
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
            </>
          ) : (
            <>
              <Grid item xs={2} sm={2}>
                <Button
                  className={classes.button}
                  size='large'
                  variant='contained'
                  color='secondary'
                  onClick={() => window.location.reload()}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  className={classes.button}
                  size='large'
                  variant='contained'
                  color='primary'
                  onClick={handleSave}
                >
                  Save to Project
                </Button>
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              {xAxis ? (
                <UserPlotly
                  xAxis={xAxis}
                  projectionLower={projectionLower}
                  projection={projection}
                  projectionUpper={projectionUpper}
                  stockSym={stockSymbol}
                  globalQuote={globalQuote}
                />
              ) : (
                loadingMessage
              )}
            </Paper>
            {loading ? <Skeleton variant='rect' height={500} /> : null}
          </Grid>
        </Grid>
      </Scrollbar>
    </Page>
  );
};
export default StockCast;
