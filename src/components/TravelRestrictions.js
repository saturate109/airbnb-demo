import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: { padding: '32px 32px 24px' },
  gutterBottom: { marginBottom: '24px' },
  card: {
    display: 'flex',
    borderLeftColor: '#ffaf0f',
    borderRadius: '8px',
    borderWidth: '1px 1px 1px 8px',
    marginBottom: '2rem',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
});

function TravelRestrictions() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card variant="outlined" className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent classes={{ root: classes.root }}>
            <Typography
              component="h2"
              variant="h2"
              gutterBottom={true}
              classes={{
                gutterBottom: classes.gutterBottom,
              }}
            >
              Travel restrictions
            </Typography>
            <Typography className={classes.body}>
              Due to COVID-19, there are government restrictions in place which
              may affect your travel plans.
              <Link
                display="inline"
                href={'#'}
                color="textSecondary"
                className={classes.location}
              >
                {' '}
                Find out more
              </Link>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default TravelRestrictions;
