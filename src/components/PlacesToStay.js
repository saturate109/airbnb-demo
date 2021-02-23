import React, { useContext, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from 'assets/jss/Layout';
import AppContext from 'helpers/AppContext';

const Carousel = lazy(() => import('components/Carousel'));

const boxStyles = {
  box: {
    ...Layout.box,
    ...{ padding: '24px 0px 24px 0px', background: '#F7F7F7' },
  },
};

const useStyles = makeStyles((theme) => ({
  ...Layout,
  ...boxStyles,
}));

const cards = [
  {
    desc: 'Richmond Hill Hotel, Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 1,
    image: '/static/media/images/StockSnap_4ALWT6KXM0.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 2,
    image: '/static/media/images/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 3,
    image: '/static/media/images/erick-palacio-_B9J6abAHPA-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 4,
    image: '/static/media/images/sidekix-media-f1Rd2HsoKnk-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 5,
    image: '/static/media/images/mark-champs-Id2IIl1jOB0-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 6,
    image:
      '/static/media/images/devon-janse-van-rensburg-LUvdI4uCNnM-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 7,
    image: '/static/media/images/filios-sazeides-uckPy5B7K4o-unsplash.jpg',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    image: '/static/media/images/blake-woolwine-lz9W775oDyI-unsplash.jpg',
  },
  {
    desc: '9 Richmond Hill Hotel Georgia from house',
    features: ['9 Hotel room', '1 bed'],
    noOfReviews: 9,
    image: '/static/media/images/venice-hotel-oqXapAIctAg-unsplash.jpg',
  },
  {
    desc: '10 Richmond Hill Hotel Georgia from house',
    features: ['10 Hotel room', '1 bed'],
    noOfReviews: 10,
    image: '/static/media/images/tyler-schaefer-Lrce4YHmybc-unsplash.jpg',
  },
  {
    desc: '11 Richmond Hill Hotel Georgia from house',
    features: ['11 Hotel room', '1 bed'],
    noOfReviews: 11,
    image: '/static/media/images/shashi-ch-A2m-9Yy12-s-unsplash.jpg',
  },
  {
    desc: '12 Richmond Hill Hotel Georgia from house',
    features: ['12 Hotel room', '1 bed'],
    noOfReviews: 12,
    image: '/static/media/images/roberto-nickson-emqnSQwQQDo-unsplash.jpg',
  },
];

const Fallback = () => <div>Loading</div>;

const config = {
  breakpoints: {
    745: {
      perView: 1,
      peek: 30,
      touchRatio: 0,
      animationDuration: 200,
      swipeThreshold: 40,
    },
    1128: {
      perView: 3,
      peek: 0,
      swipeThreshold: false,
    },
  },
};

function PlacesToStay() {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <Box className={classes.box}>
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Suspense fallback={<Fallback />}>
          <Carousel
            title="More places to stay"
            cards={cards}
            showNav={state.isMobileView ? false : true}
            showCounter={state.isMobileView ? false : true}
            configOverrides={config}
          />
        </Suspense>
      </Container>
    </Box>
  );
}

export default PlacesToStay;
