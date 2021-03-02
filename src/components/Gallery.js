import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    padding: '0',
    listStyle: 'none',
    overflowY: 'hidden',
    borderRadius: '20px',
  },
  mainImageContainer: {
    paddingTop: '100%',
    position: 'relative',
    height: 'auto !important',
    gridColumnEnd: 'span 2',
    gridRowEnd: 'span 2',
  },
  imageList: {
    display: 'grid',
    padding: '0',
    listStyle: 'none',
    overflowY: 'hidden',
    borderRadius: '20px',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridTemplateRows: 'repeat(2,1fr)',
    gap: '8px',
  },
  imageListItem: {
    display: 'inline-block',
    position: 'relative',
    lineHeight: '0',
    height: 'calc(168px + (100vw/58))',
    maxHeight: '190px',
    gridColumnEnd: 'span 1',
    gridRowEnd: 'span 1',
    '&>img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  mainImageListItem: {
    height: 'auto',
    gridColumnEnd: 'span 2',
    gridRowEnd: 'span 2',
    display: 'inline-block',
    position: 'relative',
    paddingTop: 'calc(270px + 9vw)',
    maxHeight: '408px',
    lineHeight: '0',
    '&>img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '&:first-child>img': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    },
  },
  noPad: {
    padding: 0,
  },
  hideImage: { opacity: 0, position: 'absolute' },
  showImage: { opacity: 1, transition: 'opacity 1s ease-in' },
}));

const Fallback = () => (
  <Skeleton
    variant="rect"
    animation="wave"
    width="100%"
    height="100%"
    aria-label="Image loading"
  ></Skeleton>
);

const Gallery = ({ images }) => {
  const classes = useStyles();
  const Image = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
      <>
        {props.src && (
          <img
            src={props.src}
            alt={props.alt}
            onLoad={() => setImageLoaded(true)}
            className={clsx(
              !imageLoaded && [classes.hideImage],
              imageLoaded && classes.showImage
            )}
          />
        )}
        {!imageLoaded && <Fallback />}
      </>
    );
  };
  const ImageList = (props) => (
    <ul className={classes.imageList}>{props.children}</ul>
  );
  const ImageListItem = (props) => (
    <li className={props.className}>{props.children}</li>
  );

  return (
    <Fragment>
      <ImageList className={classes.imageList}>
        {images.map((image, index) => (
          <ImageListItem
            className={clsx(
              index === 0 && classes.mainImageListItem,
              index > 0 && classes.imageListItem,
              classes.noPad
            )}
            key={index}
          >
            <Image {...image} />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Gallery.defaultProps = {
  images: Array(5).fill(),
};

export default Gallery;
