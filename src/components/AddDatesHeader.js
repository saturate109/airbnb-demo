import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Ratings from 'components/Ratings';

const useStyles = makeStyles((theme) => ({
  gradientButton: {
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '8px',
    padding: '10px 24px',
    fontSize: '1.067rem',
    letterSpacing: 'inherit',
    width: '100%',
    background: 'linear-gradient(to right, #e61e4d, #d70466)',
  },
}));

function AddDatesHeader() {
  const classes = useStyles();
  return (
    <Box display="flex" flexWrap="nowrap" alignContent="center">
      <Box alignSelf="center" mr={2}>
        <Typography variant="h5">Add dates for prices</Typography>
        <Ratings />
      </Box>
      <Box alignSelf="center" flexWrap="nowrap">
        <Button
          variant="contained"
          className={classes.gradientButton}
          disableElevation
        >
          Check availabillity
        </Button>
      </Box>
    </Box>
  );
}

export default AddDatesHeader;
