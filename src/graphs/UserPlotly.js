import React from "react";
import Plot from "react-plotly.js";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function UserPlotly({
  xAxis,
  projectionLower,
  projection,
  projectionUpper,
  stockSym,
  globalQuote,
}) {
  const classes = useStyles();

  return (
    <Paper variant='outlined' elevation={4}>
      <Card>
        <CardActionArea>
          <Plot
            data={[
              {
                x: xAxis,
                y: projectionUpper,
                type: "lines+markers",
                name: "Projection upper",
                line: {
                  color: "rgb(0, 255, 0)",
                  width: 2,
                },
              },
              {
                x: xAxis,
                y: projection,
                type: "lines+markers",
                name: "Projection",
                line: {
                  color: "rgb(0, 0, 255)",
                  width: 2,
                },
              },
              {
                x: xAxis,
                y: projectionLower,
                type: "lines+markers",
                name: "Projection lower",
                line: {
                  color: "rgb(255, 0, 0)",
                  width: 2,
                },
              },
            ]}
            layout={{
              title: `${stockSym} Casted ${Date()
                .split(" ")
                .slice(0, 5)
                .join(" ")}`,
              margin: { t: 75, l: 40, r: 20, b: 40 },
              showlegend: false,
              autosize: true,
              useResizeHandler: true,
            }}
            style={{ width: "100%", height: "100%", display: "flex", flex: 1 }}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Open: </strong>{" "}
                {parseFloat(globalQuote["Global Quote"]["02. open"]).toFixed(2)}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>High: </strong>
                {parseFloat(globalQuote["Global Quote"]["03. high"]).toFixed(2)}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Low: </strong>
                {parseFloat(globalQuote["Global Quote"]["04. low"]).toFixed(2)}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Price: </strong>{" "}
                {parseFloat(globalQuote["Global Quote"]["05. price"]).toFixed(
                  2
                )}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Volume: </strong>
                {globalQuote["Global Quote"]["06. volume"]}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Previous Close: </strong>
                {parseFloat(
                  globalQuote["Global Quote"]["08. previous close"]
                ).toFixed(2)}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Change $: </strong>{" "}
                {parseFloat(globalQuote["Global Quote"]["09. change"]).toFixed(
                  2
                )}
              </Grid>
              <Grid item xs={6} sm={3}>
                {" "}
                <strong>Change %: </strong>
                {globalQuote["Global Quote"]["10. change percent"]}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
