import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Glide from '@glidejs/glide';
import { SvgIcon } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowButton from 'components/elements/ArrowButton';

// import component SCSS files
import 'assets/scss/carousel/glide.core.scss';
import 'assets/scss/carousel/glide.theme.scss';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  cardActionArea: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},
  cardContent: {
    padding: '10px 0px 10px 0px',
  },
  cardMedia: {
    borderWidth: '1px',
    borderColor: '#a5a5a5',
    borderRadius: '8px',
    borderStyle: 'solid',
  },
  starIcon: {
    fontSize: '1.2rem',
    verticalAlign: 'middle',
    marginRight: '2px',
  },
  reviewRating: { fontWeight: 400, fontSize: '0.9333rem' },
  FavoriteTwoToneIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#ffffff',
    fontSize: '1.8rem',
  },
  title: {
    flexGrow: 1,
  },
  features: {
    paddingLeft: 0,
    '& span': {
      padding: '0 5px 0 5px',
    },
    '&>li': {
      display: 'inline-block',
    },
  },
  desc: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  radius0: {
    borderRadius: 0,
  },
  portrait: {
    paddingTop: '133%',
  },
  landscape: {
    paddingTop: '66.6667%',
  },
});

const sliderConfiguration = {
  type: 'carousel',
  bound: true,
  rewind: true,
  perView: 4,
  perSwipe: '|',
  throttle: 500,
  animationTimingFunc: 'ease-in-out',
  animationDuration: 500,
  gap: 20,
  dragDistance: false,
  swipeThreshold: 40,
};

const Counter = (props) => {
  const { index, perView, length } = props;
  const sets = length / perView;
  const content =
    perView === 0
      ? '...'
      : `${Math.ceil((index + 1) / perView)}/${Math.ceil(sets)}`;
  return (
    <span style={{ alignSelf: 'center', letterSpacing: '3px' }}>{content}</span>
  );
};

const mergeConfig = (config, overrides) => {
  return { ...config, ...overrides };
};

const BulletPoint = () => {
  return <span aria-hidden="true">·</span>;
};

const ImgMediaCard = ({
  src = null,
  alt = '',
  desc = '',
  features = [],
  noOfReviews = 0,
  roundedBorders,
  showFavourite,
  imageOrientation,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        classes={{
          root: classes.cardActionArea,
          focusHighlight: classes.focusHighlight,
        }}
      >
        {showFavourite && (
          <FavoriteTwoToneIcon
            classes={{ root: classes.FavoriteTwoToneIcon }}
          />
        )}
        {src && (
          <CardMedia
            className={clsx(
              classes.cardMedia,
              classes[imageOrientation],
              !roundedBorders && classes.radius0
            )}
            image={src}
            title={alt}
          />
        )}
        <CardContent classes={{ root: classes.cardContent }}>
          {noOfReviews > 0 && (
            <Typography gutterBottom>
              <SvgIcon
                component={Star}
                color="secondary"
                className={classes.starIcon}
              />
              <span className={classes.reviewRating}>{noOfReviews} review</span>
            </Typography>
          )}

          {features && (
            <Typography variant="body1" component="div">
              <ol className={classes.features}>
                {features.map((feature, index) => {
                  return (
                    <li key={index}>
                      {index > 0 && <BulletPoint />}
                      {feature}
                    </li>
                  );
                })}
              </ol>
              {desc && <span className={classes.desc}>{desc}</span>}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Carousel = ({
  title,
  cards,
  imageOrientation,
  floatingNav,
  roundedBorders,
  showFavourite,
  showNav,
  showCounter,
  configOverrides,
}) => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(0);
  const length = cards.length;
  const ref = useRef();

  useEffect(() => {
    let glide = new Glide(
      ref.current,
      mergeConfig(sliderConfiguration, configOverrides)
    );

    glide.on('run', function () {
      setIndex(glide.index);
    });

    glide.on('resize', function () {
      if (!glide.previousPerView || glide.perView !== glide.settings.perView) {
        glide.previousPerView = glide.settings.perView;
        setPerView(glide.settings.perView);
      }
    });

    glide.on('mount.after', function () {
      setIndex(glide.index);
      setPerView(glide.settings.perView);
    });

    glide.on('swipe.start', function () {
      return false;
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, [configOverrides]);

  return (
    <>
      <div className="glide" ref={ref}>
        <div
          className={clsx(
            'glide__arrows',
            floatingNav && 'glide__floating_nav'
          )}
          data-glide-el="controls"
        >
          {title && (
            <Typography
              component="h3"
              variant="h3"
              gutterBottom
              style={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
          )}
          {showCounter && (
            <Counter index={index} perView={perView} length={length} />
          )}
          <button
            data-glide-dir="|<"
            className={clsx(
              'glide__arrow',
              'glide__arrow--left',
              !showNav && 'glide__hide'
            )}
          >
            <ArrowButton direction="previous" />
          </button>
          <button
            data-glide-dir="|>"
            className={clsx(
              'glide__arrow',
              'glide__arrow--right',
              !showNav && 'glide__hide'
            )}
          >
            <ArrowButton direction="next" />
          </button>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className={clsx('glide__slides', perView === 1 && 'glide__m0')}>
            {cards.map((card, index) => (
              <li className="glide__slide" key={index}>
                <ImgMediaCard
                  imageOrientation={imageOrientation}
                  roundedBorders={roundedBorders}
                  showFavourite={showFavourite}
                  {...card}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
      noOfReviews: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  configOverrides: PropTypes.object,
  floatingNav: PropTypes.bool,
  imageOrientation: PropTypes.string,
  roundedBorders: PropTypes.bool,
  showCounter: PropTypes.bool,
  showFavourite: PropTypes.bool,
  showNav: PropTypes.bool,
};

Carousel.defaultProps = {
  title: null,
  cards: Array(5).fill(),
  configOverrides: {},
  floatingNav: false,
  imageOrientation: 'landscape',
  roundedBorders: true,
  showCounter: true,
  showFavourite: true,
  showNav: true,
};

export default Carousel;
