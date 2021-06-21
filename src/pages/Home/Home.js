import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import UserPlotly from 'graphs/UserPlotly'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  scrollbar: {height: '100%', width: '100%', display: 'flex', flex: 1},
  grid: {backgroundColor: theme.palette.secondary.main}
}));

const HomePage = () => {
  const intl = useIntl()

  const classes = useStyles()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar
        className={classes.scrollbar}
      >
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <UserPlotly />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <UserPlotly />
            </Paper>
          </Grid>
        </Grid>
      </Scrollbar>
    </Page>
  )
}
export default HomePage
