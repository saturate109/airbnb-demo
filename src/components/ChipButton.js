import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '&&:hover': {
      borderColor: '#000000',
      backgroundColor: 'initial',
    },
    height: '34px',
  },
  label: {
    fontWeight: 400,
    padding: '0 16px 0 16px',
    fontSize: '0.9rem',
  },
  score: {
    fontWeight: 500,
  },
}));

function handleClick() {}

const ChipButton = ({ title, score }) => {
  const classes = useStyles();
  const label = (
    <span>
      {title} <span className={classes.score}>{score}</span>
    </span>
  );
  return (
    <Chip
      label={label}
      onClick={handleClick}
      variant="outlined"
      classes={{ root: classes.root, label: classes.label }}
    ></Chip>
  );
};

ChipButton.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

ChipButton.defaultProps = {
  title: '',
  score: 0,
};

export default ChipButton;
