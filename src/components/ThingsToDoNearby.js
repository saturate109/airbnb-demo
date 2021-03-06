import React, { useContext, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from 'assets/jss/Layout';
import AppContext from 'helpers/AppContext';

const Carousel = lazy(() => import('components/Carousel'));

const boxStyles = {
  box: { ...Layout.box, ...{ paddingBottom: '48px', background: '#F7F7F7' } },
};

const useStyles = makeStyles((theme) => ({
  ...Layout,
  ...boxStyles,
}));

const cards = [
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 1,
    src: 'static/media/images/anastasiya-vysotskaya-JyPA8uZoxAI-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 2,
    src: 'static/media/images/vino-li-B6r53VoObPw-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 3,
    src: 'static/media/images/connor-wilkins-eW6JCH_fbck-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 4,
    src: 'static/media/images/tengyart-wpRfk1NT6Ng-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 5,
    src: 'static/media/images/rendy-novantino-CCDvM-K9cO0-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 6,
    src: 'static/media/images/maria-teneva-VzoYjK6gje4-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 7,
    src: 'static/media/images/david-suarez-d81WD5Q87E0-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/bantersnaps-Bxzrd0p6yOM-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/diego-rosa-Yyk4OmVJAyE-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/david-hofmann-CHvZh9h--5w-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/scott-broome-BcVvVvqiCGA-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/laura-fuhrman-dEVHukGkHq4-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/joshua-chun-BV30M3K-EFk-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/angelos-michalopoulos-H-t_LuxDE_w-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
  {
    desc: 'Richmond Hill Hotel Georgia from house.jpg',
    features: ['Hotel room', '1 bed'],
    noOfReviews: 8,
    src: 'static/media/images/bayu-martdiansyah-jKhtwPg-ELc-unsplash.jpg',
    alt: 'Richmond Hill Hotel',
  },
];

const Fallback = () => <div>Loading</div>;

const config = {
  breakpoints: {
    745: {
      perView: 2,
      peek: 30,
      touchRatio: 0,
      animationDuration: 200,
    },
  },
};

function ThingsToDoNearby() {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  return (
    <Box className={classes.box}>
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Suspense fallback={<Fallback />}>
          <Carousel
            imageOrientation="portrait"
            title="Things to do nearby"
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

export default ThingsToDoNearby;
