import AppBar from "@material-ui/core/AppBar";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useEffect, useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useIntl } from "react-intl";
import UserPlotly from "graphs/UserPlotly";

const TabsDemo = () => {
  const [tab, setTab] = useState("one");
  const intl = useIntl();

  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/graphs/")
      .then(response => response.json())
      .then(userProjects => setUserProjects(userProjects));
  }, []);

  const renderUserPlotly = () => {
    return userProjects.map(graph => {
      let xAxis = graph["x_axis_array"].split(",");
      let projectionLower = graph["proj_low_array"].split(",");
      let projection = graph["proj_array"].split(",");
      let projectionUpper = graph["proj_high_array"].split(",");
      let stockSym = graph["stock_sym"];

      return (
        <UserPlotly
          xAxis={xAxis}
          projectionLower={projectionLower}
          projection={projection}
          projectionUpper={projectionUpper}
          stockSym={stockSym}
        />
      );
    });
  };

  const renderProjectTabs = () => {
    return (
      <Tabs
        value={tab}
        onChange={(e, t) => setTab(t)}
        aria-label='project tabs'
        centered
      >
        <Tab label='Item One' value='one' />
        <Tab label='Item Two' value='two' />
        <Tab label='Item Three' value='three' />
      </Tabs>
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
      {" "}
      {renderProjectTabs()}
      <div>
        {tab === "one" && renderUserPlotly()}
        {tab === "two" && <div>Two</div>}
        {tab === "three" && <div>Three</div>}
      </div>
    </Page>
  );
};
export default TabsDemo;
