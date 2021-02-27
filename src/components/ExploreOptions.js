import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from 'assets/jss/Layout';

const boxStyles = {
  box: {
    ...Layout.box,
    ...{ padding: '48px 0px 24px 0px', background: '#F7F7F7' },
  },
};

const useStyles = makeStyles(() => ({
  ...Layout,
  ...boxStyles,
  gutterBottom: { marginBottom: '24px' },
  subtitle1: { fontWeight: 400, marginBottom: '38px' },
  bulletList: {
    margin: 0,
    paddingLeft: 0,
    fontWeight: 400,
    fontSize: '1rem',
    color: '#717171',
    '& span': {
      padding: '0 3px 0 3px',
    },
    '&>li': {
      display: 'inline-block',
    },
  },
  listItem: {
    color: '#717171',
    marginBottom: '18px',
    fontSize: '1.067rem',
  },
}));

const places = [
  'Central London',
  'Brighton',
  'Cambridge',
  'Oxford',
  'Cotswold District',
  'Bournemouth',
  'Birmingham',
  'Bath',
  'Bristol',
  'De Panne',
  'Étretat',
  'Cardiff',
];

const bulletList = [
  'Flats',
  'Bed and breakfasts',
  'Lofts',
  'Villas',
  'Apartments',
];

function BulletPoint() {
  return <span aria-hidden="true">·</span>;
}

function ExploreOptions() {
  const classes = useStyles();
  const colWidth = { xs: 6, sm: 4, md: 4, lg: 3 };

  return (
    <Box className={classes.box}>
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Typography
          component="h3"
          variant="h3"
          gutterBottom
          classes={{ gutterBottom: classes.gutterBottom }}
        >
          Explore other options in and around Greater London
        </Typography>
        <Typography variant="body1">
          More places to stay in Greater London:
        </Typography>
        <Typography
          variant="subtitle1"
          classes={{ subtitle1: classes.subtitle1 }}
          gutterBottom
        >
          <ol className={classes.bulletList}>
            {bulletList.map((item, index) => (
              <li key={index}>
                {index > 0 && <BulletPoint />} {item}
              </li>
            ))}
          </ol>
        </Typography>

        <Grid container>
          {places.map((item, index) => (
            <Grid item {...colWidth} className={classes.listItem} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ExploreOptions;
