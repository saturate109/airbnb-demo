import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: 'rgb(221, 221, 221)',
    borderRadius: '24px',
  },
  fontSizeLarge: {
    '&:first-child': {
      fontSize: '2rem',
    },
  },
  endIcon: { marginLeft: '0px' },
}));

function Hamburger() {
  const classes = useStyles();
  const startIcon = <MenuIcon color="primary" />;
  const endIcon = (
    <PersonPinIcon
      color="primary"
      fontSize="large"
      classes={{
        fontSizeLarge: classes.fontSizeLarge,
      }}
    />
  );
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        classes={{
          root: classes.root,
          endIcon: classes.endIcon,
        }}
        startIcon={startIcon}
        endIcon={endIcon}
      ></Button>
    </React.Fragment>
  );
}

export default Hamburger;
