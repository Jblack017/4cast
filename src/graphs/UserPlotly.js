import React from "react";
import Plot from "react-plotly.js";
import Paper from "@material-ui/core/Paper";

export default function UserPlotly() {
  return (
    <Paper variant='outlined' square={false} elevation={6}>
      <Plot
        data={[
          {
            x: ["one", "two", "three"],
            y: [4, 5, 6],
            type: "lines+markers",
            name: "Projection upper",
            line: {
              color: "rgb(0, 0, 255)",
              width: 2,
            },
          },
        ]}
        layout={{
          title: "A Fancy Plot",
          margin: { t: 75, l: 25, r: 20, b: 25 },
        }}
        style={{ width: "100%", height: "100%", display: "flex", flex: 1 }}
        useResizeHandler={true}
      />
    </Paper>
  );
}
