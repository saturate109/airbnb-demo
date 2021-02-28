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
    src: 'static/media/images/StockSnap_4ALWT6KXM0.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 2,
    src: 'static/media/images/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 3,
    src: 'static/media/images/erick-palacio-_B9J6abAHPA-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 4,
    src: 'static/media/images/sidekix-media-f1Rd2HsoKnk-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 5,
    src: 'static/media/images/mark-champs-Id2IIl1jOB0-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 6,
    src:
      'static/media/images/devon-janse-van-rensburg-LUvdI4uCNnM-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 7,
    src: 'static/media/images/filios-sazeides-uckPy5B7K4o-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/blake-woolwine-lz9W775oDyI-unsplash.jpg',
  },
  {
    desc: '9 Richmond Hill Hotel Georgia from house',
    features: ['9 Hotel room', '1 bed'],
    noOfReviews: 9,
    src: 'static/media/images/venice-hotel-oqXapAIctAg-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: '10 Richmond Hill Hotel Georgia from house',
    features: ['10 Hotel room', '1 bed'],
    noOfReviews: 10,
    src: 'static/media/images/tyler-schaefer-Lrce4YHmybc-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: '11 Richmond Hill Hotel Georgia from house',
    features: ['11 Hotel room', '1 bed'],
    noOfReviews: 11,
    src: 'static/media/images/shashi-ch-A2m-9Yy12-s-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: '12 Richmond Hill Hotel Georgia from house',
    features: ['12 Hotel room', '1 bed'],
    noOfReviews: 12,
    src: 'static/media/images/roberto-nickson-emqnSQwQQDo-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
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
    },
    1128: {
      perView: 3,
      peek: 0,
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
