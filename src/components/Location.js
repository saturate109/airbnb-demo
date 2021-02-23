import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: { padding: '48px 0px 48px 0px' },
  gutterBottom: { marginBottom: '24px' },
  buttonOutlined: {
    borderColor: '#000000',
  },
  button: {
    textTransform: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px 25px',
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      width: '100%',
    },
  },
}));

function Location() {
  const classes = useStyles();
  return (
    <Container classes={{ root: classes.root }}>
      <Typography
        component="h3"
        variant="h3"
        gutterBottom
        classes={{ gutterBottom: classes.gutterBottom }}
      >
        Location
      </Typography>
      {/* TODO: create googlemaps component */}
      <img
        src="/static/media/images/googlemap.png"
        alt="placeholder"
        className={classes.gutterBottom}
        style={{ width: '100%' }}
      />
      <Typography
        variant="h5"
        gutterBottom
        classes={{ gutterBottom: classes.gutterBottom }}
      >
        Greater London, England, United Kingdom
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        classes={{ gutterBottom: classes.gutterBottom }}
      >
        The house is located in a smart and safe area of East London, Hackney,
        only 10 minutes direct by public transport to Central London.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        classes={{ outlined: classes.buttonOutlined, root: classes.button }}
      >
        More about the location
      </Button>
    </Container>
  );
}

export default Location;
