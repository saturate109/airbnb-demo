import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Layout from 'assets/jss/Layout';
import Skeleton from '@material-ui/lab/Skeleton';

const Carousel = lazy(() => import('components/Carousel'));

const useStyles = makeStyles((theme) => ({
  ...Layout,
}));

const cards = [
  {
    image: 'static/media/images/cafe-3537801_1280.jpg',
  },
  {
    image: 'static/media/images/jason-briscoe-AQl-J19ocWE-unsplash.jpg',
  },
  {
    image: 'static/media/images/bedroom-527645_1280.jpg',
  },
  {
    image: 'static/media/images/kara-eads-L7EwHkq1B2s-unsplash.jpg',
  },
  {
    image: 'static/media/images/greg-rivers-rChFUMwAe7E-unsplash.jpg',
  },
];

const Fallback = () => (
  <Skeleton
    variant="rect"
    width="100%"
    style={{ paddingTop: '66.6667%', marginBottom: '16px' }}
  ></Skeleton>
);

function MainSlider() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Suspense fallback={<Fallback />}>
        <Carousel
          cards={cards}
          floatingNav={true}
          roundedBorders={false}
          showFavourite={false}
          showNav={false}
          configOverrides={{
            perView: 1,
            gap: 0,
            touchRatio: 0,
            animationDuration: 200,
            breakpoints: null,
            swipeThreshold: 40,
          }}
        />
      </Suspense>
    </Box>
  );
}

export default MainSlider;
