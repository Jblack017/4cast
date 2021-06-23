import Page from "material-ui-shell/lib/containers/Page";
import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import UserPlotly from "graphs/UserPlotly";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import csv from "csv";
import { useDropzone } from "react-dropzone";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    fontSize: "2em",
  },
  scrollbar: { height: "70%", width: "70%", display: "flex", flex: 1 },
  button: { margin: theme.spacing(3) },
}));

const CsvCast = () => {
  const intl = useIntl();
  const classes = useStyles();

  const [xAxis, setXAxis] = useState(null);
  const [projectionLower, setProjectionLower] = useState(null);
  const [projection, setProjection] = useState(null);
  const [projectionUpper, setProjectionUpper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Drag and Drop a CSV");
  const [fileName, setFileName] = useState("file name");

  const onDrop = useCallback(
    acceptedFile => {
      const reader = new FileReader();
      setLoading(true);

      const thinkalatorIO = data => {
        fetch("https://four-cast-app.herokuapp.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: data }),
        })
          .then(response => response.json())
          .then(forecast => {
            csv.parse(forecast.data, (err, data) => {
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
                setLoading(false);
              } else {
                console.error(err);
                setLoading(false);
              }
            });
          })
          .catch(promiseError => console.error(promiseError));
      };

      reader.readAsText(acceptedFile[0]);
      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          if (err) {
            return console.error("Parsed CSV error: ", err);
          }
          setLoadingMessage("Waiting for response from FB Prophet ");
          thinkalatorIO(data);
        });
      };
    },
    [setXAxis, setProjectionLower, setProjection, setProjectionUpper]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSave = () => {
    let stockObject = {
      project: "5",
      // stock_sym: stockSymbol.toString().toUpperCase(),
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
        id: "stock_cast",
        defaultMessage: "Stock Cast",
      })}
    >
      <Scrollbar className={classes.scrollbar}>
        <Grid container justify='center' className={classes.grid}>
          {!xAxis ? (
            <>
              <Grid item center lg={1}>
                <Paper variant='outlined' elevation={3} {...getRootProps()}>
                  <input width='250px' {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>Drag and Drop a CSV here...or Click to Select File.</p>
                  )}
                </Paper>
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
                  stockSym={fileName}
                  globalQuote={{}}
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
export default CsvCast;
