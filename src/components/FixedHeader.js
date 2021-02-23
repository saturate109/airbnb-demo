import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AddDatesHeader from 'components/AddDatesHeader';
import Layout from 'assets/jss/Layout';

const useStyles = makeStyles((theme) => ({
  ...Layout,
  toolbar: {
    width: '100%',
    height: '80px',
    zIndex: 2,
    position: 'fixed',
    background: '#ffffff',
    marginBottom: '24px',
    left: '0',
    justifyContent: 'center',
    borderBottom: '1px #E4E4E4 solid',
  },
  content: {
    height: '80px',
    width: '100%',
    background: '#ffffff',
    maxWidth: '1200px',
    borderBottom: '1px #E4E4E4 solid',
  },
  toolbarTitle: {
    flex: 1,
  },
  showHeader: {
    opacity: 1,
  },
  navList: {
    paddingLeft: 0,
    '& > li': {
      display: 'inline',
      marginRight: '24px',
      fontSize: '1rem',
    },
  },
}));

function FixedHeader(props) {
  const classes = useStyles();
  const { showCheckAvailability = false } = props;
  const links = [
    { text: 'Photos', link: '/photos' },
    { text: 'Amenities', link: '/amenities' },
    { text: 'Reviews', link: '/reviews' },
    { text: 'Location', link: '/location' },
  ];

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} disableGutters={true}>
        <Box className={classes.box}>
          <Container maxWidth="lg" classes={{ root: classes.container }}>
            <Grid container={true} justify="space-between">
              <Grid item={true}>
                <Toolbar className={classes.content} disableGutters={true}>
                  <Typography
                    color="inherit"
                    align="center"
                    noWrap
                    variant="h5"
                  >
                    <ul className={classes.navList}>
                      {links.map((link, index) => (
                        <li key={index}>{link.text}</li>
                      ))}
                    </ul>
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid item={true} style={{ alignSelf: 'center' }}>
                {showCheckAvailability && <AddDatesHeader />}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default FixedHeader;
