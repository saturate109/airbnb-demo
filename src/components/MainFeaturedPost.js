import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  mainImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
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
  },
}));

function MainFeaturedPost(props) {
  const classes = useStyles();
  const mainImage = (
    <img
      src="/static/media/images/cafe-3537801_1280.jpg"
      className={classes.mainImage}
      alt="House"
    />
  );
  const sub1 = (
    <img
      src="/static/media/images/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
      alt="Bedroom 1"
    />
  );
  const sub2 = (
    <img src="/static/media/images/bedroom-527645_1280.jpg" alt="Bedroom 2" />
  );
  const sub3 = (
    <img
      src="/static/media/images/kara-eads-L7EwHkq1B2s-unsplash.jpg"
      alt="Living Room"
    />
  );
  const sub4 = (
    <img
      src="/static/media/images/greg-rivers-rChFUMwAe7E-unsplash.jpg"
      alt="Outside"
    />
  );

  const ImageList = (props) => (
    <ul className={classes.imageList}>{props.children}</ul>
  );
  const ImageListItem = (props) => (
    <li className={props.className}>{props.children}</li>
  );

  return (
    <Fragment>
      <ImageList className={classes.imageList}>
        <ImageListItem
          className={classes.mainImageListItem}
          children={mainImage}
        />
        <ImageListItem className={classes.imageListItem} children={sub1} />
        <ImageListItem className={classes.imageListItem} children={sub2} />
        <ImageListItem className={classes.imageListItem} children={sub3} />
        <ImageListItem className={classes.imageListItem} children={sub4} />
      </ImageList>
    </Fragment>
  );
}

export default MainFeaturedPost;
