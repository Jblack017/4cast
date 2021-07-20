import Page from "material-ui-shell/lib/containers/Page";
import React, { useState, useCallback } from "react";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import UserPlotly from "graphs/UserPlotly";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import csv from "csv";
import { useDropzone } from "react-dropzone";
import Skeleton from "@material-ui/lab/Skeleton";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import DoneIcon from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.light,
    fontSize: "2.7em",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: `100%`,
  },
  column: {
    flexBasis: "100%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  scrollbar: { height: "70%", width: "70%", display: "flex", flex: 1 },
  textField: { margin: theme.spacing(3) },
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
  const [loadingMessage, setLoadingMessage] = useState("Your Future Awaits");
  const [fileName, setFileName] = useState("file name");
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [projectName, setProjectName] = useState("Project Name");
  const [projectDescription, setProjectDescription] = useState(
    "Enter Description Here"
  );

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
      setFileName(
        `${acceptedFile[0].name.split(".")[0]} Casted ${Date()
          .split(" ")
          .slice(0, 5)
          .join(" ")}`
      );
      reader.readAsText(acceptedFile[0]);
      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          if (err) {
            return console.error("Parsed CSV error: ", err);
          }
          setLoadingMessage("Waiting on your 90 Day Forecast");
          thinkalatorIO(data);
        });
      };
    },
    [setXAxis, setProjectionLower, setProjection, setProjectionUpper]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSaveExisting = () => {
    let stockObject = {
      project: project.id,
      stock_sym: `${fileName} Casted ${Date()
        .split(" ")
        .slice(0, 5)
        .join(" ")}`,
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
      .then(
        window.alert(
          `${fileName.split(" ")[0]} has been saved to ${project.name}`
        )
      );
  };

  const handleSaveNew = () => {
    let projectObject = {
      project: {
        name: projectName,
        description: projectDescription,
        graph: {
          stock_sym: `${fileName.toString().toUpperCase()} Casted ${Date()
            .split(" ")
            .slice(0, 5)
            .join(" ")}`,
          x_axis_array: xAxis.toString(),
          proj_low_array: projectionLower.toString(),
          proj_high_array: projection.toString(),
          proj_array: projectionUpper.toString(),
        },
      },
    };
    fetch("http://localhost:3000/projects/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectObject),
    })
      .then(response => response.json())
      .then(window.alert(`${fileName} has been saved to ${projectName}`));
  };

  useEffect(() => {
    fetch("http://127.0.0.1:3000/projects/")
      .then(response => response.json())
      .then(setProjects);
  }, []);

  const renderProjectChips = () => {
    return projects.map(project => {
      return (
        <Chip
          color='primary'
          size='small'
          label={project.name}
          deleteIcon={<DoneIcon />}
          onDelete={() => setProject(project)}
          avatar={<Avatar>{project.id}</Avatar>}
        />
      );
    });
  };

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "stock_cast",
        defaultMessage: "Cast CSV",
      })}
    >
      <Scrollbar className={classes.scrollbar}>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.grid}
          spacing={0}
        >
          {!xAxis ? (
            <>
              {!loading ? (
                <Grid item lg={12} alignItems='center'>
                  <Paper {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <Paper className={classes.paper}>
                        Drop the file here ...
                      </Paper>
                    ) : (
                      <Paper className={classes.paper}>
                        Drag and Drop a CSV here...or Click to Select File.
                      </Paper>
                    )}
                  </Paper>
                </Grid>
              ) : null}
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
                <Paper className={classes.root}>
                  <Accordion defaultExpanded={false}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1c-content'
                      id='panel1c-header'
                    >
                      <div className={classes.column}>
                        <Typography className={classes.heading}>
                          Save to New
                        </Typography>
                      </div>
                      <div className={classes.column}></div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                      <div className={classes.column} />
                      <TextField
                        id='standard-basic'
                        label='Name Project'
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                      />
                      <br></br>
                      <TextField
                        id='outlined-multiline-flexible'
                        label='Describe Project'
                        multiline
                        rowsMax={4}
                        value={projectDescription}
                        onChange={e => setProjectDescription(e.target.value)}
                        variant='outlined'
                      />
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                      <Button
                        size='small'
                        color='primary'
                        onClick={() => handleSaveNew()}
                      >
                        Save
                      </Button>
                    </AccordionActions>
                  </Accordion>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Paper className={classes.root}>
                  <Accordion defaultExpanded={false}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1c-content'
                      id='panel1c-header'
                    >
                      <div className={classes.column}>
                        <Typography className={classes.heading}>
                          Save to Existing
                        </Typography>
                      </div>
                      <div className={classes.column}></div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                      <div className={classes.column} />
                      <div className={classes.column}>
                        {renderProjectChips()}
                      </div>
                    </AccordionDetails>
                    <Divider />
                    <AccordionActions>
                      <Button
                        size='small'
                        color='primary'
                        onClick={() => handleSaveExisting()}
                      >
                        Save
                      </Button>
                    </AccordionActions>
                  </Accordion>
                </Paper>
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
