import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import 'assets/css/CalendarPicker.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '48px 0px 48px 0px',
    [theme.breakpoints.down(745)]: {
      paddingBottom: '0px',
    },
  },
  tileClassName: {
    background: 'none',
    border: 0,
  },
  secondary: {
    color: '#717171',
    fontWeight: 300,
    fontSize: '1rem',
  },
}));

function CalendarPicker() {
  const [value, onChange] = useState(new Date());
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.root }}>
      <Typography component="h3" variant="h3" gutterBottom>
        Select check-in date
      </Typography>
      <Typography
        subtitle1="h6"
        color="secondary"
        classes={{ colorSecondary: classes.secondary }}
      >
        Add your travel dates for exact pricing
      </Typography>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={classes.tileClassName}
        maxDetail="month"
      />
    </Container>
  );
}

export default CalendarPicker;
