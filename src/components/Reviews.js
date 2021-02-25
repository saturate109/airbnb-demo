import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { SvgIcon } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import AppContext from 'helpers/AppContext';
import Score from 'components/Score';
import ChipButton from 'components/ChipButton';
import Review from 'components/Review';

const useStyles = makeStyles((theme) => ({
  container: {
    fontWeight: 500,
    padding: '48px 0px 48px 0px',
  },
  starIcon: {
    fontSize: '1.5rem',
    verticalAlign: 'top',
    marginRight: '10px',
  },
  item: {
    padding: '4px',
    '&:first-child': {
      paddingLeft: 0,
    },
  },
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
  list: {
    paddingBottom: '20px',
  },
}));

const scores = [
  { title: 'Cleanliness', score: 4.8 },
  { title: 'Accuracy', score: 4.9 },
  { title: 'Communication', score: 4.3 },
  { title: 'Location', score: 4.2 },
  { title: 'Check-in', score: 4.8 },
  { title: 'Value', score: 1 },
];

const chips = [
  { title: 'Responsive host', score: 1 },
  { title: 'A quiet neighbourhood', score: 1 },
  { title: 'Friendly host', score: 2 },
  { title: 'Helpful host', score: 3 },
];

const reviews = [
  {
    name: 'Steven',
    avatar: 'static/media/images/XzA4MjM3ODkuanBn.jpg',
    date: 'January 2020',
    text:
      "John's apartment is greatly located, well organised and equipped. Ideal to visit central London.",
  },
  {
    name: 'Hannah',
    avatar: 'static/media/images/XzAzODEzODcuanBn.jpg',
    date: 'November 2019',
    text:
      'The house is perfect, has everything you need, very homely. We will definitely be staying again.',
  },
  {
    name: 'Michelle',
    avatar: 'static/media/images/XzA4MjQ3MjkuanBn.jpg',
    date: 'October 2019',
    text: 'Beautiful place! I would recommend it to everyone!!',
  },
  {
    name: 'Alex',
    avatar: 'static/media/images/XzA1NzUxNTUuanBn.jpg',
    date: 'November 2019',
    text: 'Secure, comfortable, convenient location.',
  },
  {
    name: 'Marie',
    avatar: 'static/media/images/XzA3MDkzNzAuanBn.jpg',
    date: 'May 2018',
    text:
      'We really enjoyed our stay, great for small children and lovely hosts.',
  },
  {
    name: 'Francis',
    avatar: 'static/media/images/XzAyODIwOTQuanBn.jpg',
    date: 'September 2018',
    text:
      'Excellent Edwardian house with huge garden area for the kids to run around. Hosts are very friendly. Highly recommended.',
  },
];

function Reviews() {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <SvgIcon
          component={Star}
          color="secondary"
          className={classes.starIcon}
        />
        <Typography component="h3" variant="h3" display="inline">
          4.75 (17 reviews)
        </Typography>
      </Grid>
      {!state.isMobileView && (
        <>
          <Grid item xs={12}>
            {scores.map((score, index) => (
              <Score key={index} {...score} />
            ))}
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={0}>
              {chips.map((chip, index) => (
                <Grid item key={index} classes={{ item: classes.item }}>
                  <ChipButton {...chip} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      )}

      <Grid item xs={12}>
        <List classes={{ padding: classes.list }}>
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </List>
        <Button
          variant="outlined"
          size="large"
          classes={{ outlined: classes.buttonOutlined, root: classes.button }}
        >
          Show all 17 reviews
        </Button>
      </Grid>
    </Grid>
  );
}

export default Reviews;
