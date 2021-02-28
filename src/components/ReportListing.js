import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SvgIcon } from '@material-ui/core';
import { FlagRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#717171',
    padding: '20px',
    fontWeight: 500,
    '& > span': {
      textDecoration: 'underline',
    },
  },
  flag: {
    fontSize: '1.2rem',
    transform: 'rotate(-20deg)',
    marginRight: '10px',
    position: 'relative',
    top: '3px',
  },
}));

function ReportListing() {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.root }}>
      <SvgIcon component={FlagRounded} className={classes.flag} />
      <span>Report this listing</span>
    </Container>
  );
}

export default ReportListing;
