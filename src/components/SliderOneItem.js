import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Layout from 'assets/jss/Layout';
import Skeleton from '@material-ui/lab/Skeleton';

const Carousel = lazy(() => import('components/Carousel'));

const useStyles = makeStyles(() => ({
  ...Layout,
}));

const Fallback = () => (
  <Skeleton
    variant="rect"
    animation="wave"
    width="100%"
    style={{ paddingTop: '66.6667%', marginBottom: '16px' }}
  ></Skeleton>
);

function MainSlider({ images }) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Suspense fallback={<Fallback />}>
        <Carousel
          cards={images}
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
          }}
        />
      </Suspense>
    </Box>
  );
}

MainSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

MainSlider.defaultProps = {
  images: [],
};

export default MainSlider;
