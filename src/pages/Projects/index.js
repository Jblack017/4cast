import AppBar from "@material-ui/core/AppBar";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useIntl } from "react-intl";
import UserPlotly from "graphs/UserPlotly";
import Tooltip from "@material-ui/core/Tooltip";

const Projects = () => {
  const [tab, setTab] = useState(40);
  const [userProjects, setUserProjects] = useState([]);
  const intl = useIntl();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/projects/")
  //     .then(response => response.json())
  //     .then(userProj => setUserProjects(userProj))
  //     .then(() => {
  //       if (!userProjects.length) {
  //         console.error("no user project length");
  //       } else {
  //         setTab(userProjects[0]["id"]);
  //       }
  //     });
  // }, [userProjects]);

  const renderUserProjects = () => {
    if (!userProjects.length) {
      console.error("no user project length");
    } else {
      const foundProjects = userProjects.filter(project => project.id === tab);
      return foundProjects.map(proj => {
        proj.graphs.reverse();
        return proj.graphs.map(graph => {
          return (
            <UserPlotly
              xAxis={graph["x_axis_array"].split(",")}
              projectionLower={graph["proj_low_array"].split(",")}
              projection={graph["proj_array"].split(",")}
              projectionUpper={graph["proj_high_array"].split(",")}
              stockSym={graph["stock_sym"]}
              globalQuote={{}}
            />
          );
        });
      });
    }
  };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "tabs_demo",
        defaultMessage: "Existing Cast Projects",
      })}
      tabs={
        <AppBar position='static'>
          <Tabs
            value={tab}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
            centered
          >
            {userProjects.length ? (
              userProjects.map(project => {
                console.log(project);
                return (
                  <Tooltip
                    title={project.description}
                    aria-label={project.description}
                  >
                    <Tab
                      onClick={() => setTab(project.id)}
                      label={project.name}
                      value={project.id}
                    />
                  </Tooltip>
                );
              })
            ) : (
              <Tab label='Create New Project' value='A' />
            )}
          </Tabs>
        </AppBar>
      }
    >
      <div>
        {renderUserProjects()}
        {userProjects.length ? null : ( // userProjects.filter(project => tab === project.id)
          <div>"Create new Project"</div>
        )}
      </div>
    </Page>
  );
};
export default Projects;
