import AppBar from "@material-ui/core/AppBar";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useEffect, useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useIntl } from "react-intl";
import UserPlotly from "graphs/UserPlotly";

const TabsDemo = () => {
  const [userProjects, setUserProjects] = useState([]);
  const [tab, setTab] = useState("new");
  const intl = useIntl();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/projects/")
      .then(response => response.json())
      .then(projects => setUserProjects(projects));
  }, []);

  console.log(userProjects);
  // const renderGraphs = graphs => {
  //   return graphs.map(graph => {
  //     let xAxis = graph["x_axis_array"].split(",");
  //     let projectionLower = graph["proj_low_array"].split(",");
  //     let projection = graph["proj_array"].split(",");
  //     let projectionUpper = graph["proj_high_array"].split(",");
  //     let stockSym = graph["stock_sym"];

  //     return (
  //       <UserPlotly
  //         xAxis={xAxis}
  //         projectionLower={projectionLower}
  //         projection={projection}
  //         projectionUpper={projectionUpper}
  //         stockSym={stockSym}
  //       />
  //     );
  //   });
  // };

  const renderTabLabels = () => {
    if (userProjects.length) {
      return userProjects.map(project => {
        return <Tab label={project.name} value={project.id} />;
      });
    } else {
      return <Tab label='new' value='new' />;
    }
  };

  const renderProjectPageGraphs = () => {
    console.log("test", userProjects);
  };

  const returnThisThing = () => {
    return (
      <>
        {" "}
        <Tabs
          value={tab}
          onChange={(e, t) => setTab(t)}
          aria-label='project tabs'
          variant='scrollable'
          scrollButtons='on'
        ></Tabs>{" "}
      </>
    );
  };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "Existing 4Cast Projects",
        defaultMessage: "Existing 4Cast Projects",
      })}
      tabs={<AppBar position='static'></AppBar>}
    >
      {returnThisThing()}
    </Page>
  );
};
export default TabsDemo;
