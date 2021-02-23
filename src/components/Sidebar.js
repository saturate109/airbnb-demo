import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddDates from 'components/AddDates';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: '128px',
  },
  sidebarDatesBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Grid item xs={12} classes={{ root: classes.root }}>
      <AddDates />
    </Grid>
  );
}

export default Sidebar;
