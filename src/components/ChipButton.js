import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

function ChipButton(props) {
  const { title, score } = props;
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
}

export default ChipButton;
