import React from "react";
import Plot from "react-plotly.js";
import Paper from "@material-ui/core/Paper";

export default function UserPlotly({
  xAxis,
  projectionLower,
  projection,
  projectionUpper,
}) {
  return (
    <Paper variant='outlined' square={false} elevation={6}>
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
          title: "A Fancy Plot",
          margin: { t: 75, l: 40, r: 20, b: 40 },
          showlegend: false
        }}
        style={{ width: "100%", height: "100%", display: "flex", flex: 1 }}
      />
    </Paper>
  );
}
