import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  review: {
    display: 'inline-block',
    width: '41.6667%',
    marginRight: '8.33333%',
    paddingLeft: 0,
    paddingRight: '8px',
  },
  type: { display: 'inline-block' },
  sliderWrapper: { width: '50%', display: 'inline-block' },
  slider: { width: '75%', alignSelf: 'flex-end' },
  title: { fontWeight: 400 },
  titleGrid: { alignSelf: 'center' },
  rail: { height: '4px', color: '#b9b9b9', borderRadius: '2px' },
  track: { height: '4px', color: '#000000', borderRadius: '2px' },
  thumb: { display: 'none' },
  sliderGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  score: { fontSize: '0.8rem', alignSelf: 'center' },
}));

const Score = ({ title, score }) => {
  const classes = useStyles();
  return (
    <div className={classes.review}>
      <Grid container spacing={3}>
        <Grid item xs={5} classes={{ root: classes.titleGrid }}>
          <Typography
            variant="subtitle1"
            display="inline"
            classes={{ subtitle1: classes.title }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} classes={{ item: classes.sliderGrid }}>
          <Slider
            disabled
            key={`slider-${title}`}
            defaultValue={score}
            min={0}
            max={5}
            aria-labelledby="disabled-slider"
            className={classes.slider}
            classes={{
              rail: classes.rail,
              track: classes.track,
              thumb: classes.thumb,
            }}
          />
        </Grid>
        <Grid item xs={1} className={classes.score}>
          {score}
        </Grid>
      </Grid>
    </div>
  );
};

Score.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

Score.defaultProps = {
  title: '',
  score: 0,
};

export default Score;
