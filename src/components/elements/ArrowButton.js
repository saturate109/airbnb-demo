import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  iconContainer: {
    borderRadius: '20px',
    display: 'inline-flex',
    padding: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 1px 1px',
    border: 0,
    cursor: 'pointer',
  },
  arrowIcon: {
    fontSize: '0.75rem',
  },
});

function ArrowIcon(props) {
  const classes = useStyles();
  return props.direction === 'previous' ? (
    <ArrowBackIosIcon
      fontSize="small"
      className={classes.arrowIcon}
      viewBox="-5 0 24 24"
    />
  ) : (
    <ArrowForwardIosOutlinedIcon
      fontSize="small"
      className={classes.arrowIcon}
    />
  );
}

function ArrowButton(props) {
  const classes = useStyles();
  const { className, direction = 'next' } = props;
  return (
    <Paper
      component="a"
      className={className}
      classes={{ root: classes.iconContainer }}
    >
      <ArrowIcon direction={direction} />
    </Paper>
  );
}

export default ArrowButton;
