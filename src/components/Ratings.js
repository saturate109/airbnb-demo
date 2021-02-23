import { React, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  starIcon: {
    fontSize: '0.9333rem',
    verticalAlign: 'middle',
    marginRight: '2px',
  },
  score: { fontWeight: 500, fontSize: '0.8rem' },
  reviews: { fontWeight: 400, color: '#717171', fontSize: '0.8rem' },
}));

function Ratings() {
  const classes = useStyles();

  return (
    <Fragment>
      <SvgIcon
        component={Star}
        color="secondary"
        className={classes.starIcon}
      />
      <span className={classes.score}>5.75</span>&nbsp;
      <span className={classes.reviews}>(17)</span>
    </Fragment>
  );
}

export default Ratings;
