import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AppContext from 'helpers/AppContext';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    width: '50%',
    marginBottom: '1em',
  },
  avatar: {
    width: '60px',
    height: '60px',
    [theme.breakpoints.down(745)]: {
      position: 'absolute',
      right: '24px',
    },
  },
  h5: { marginBottom: '1rem !important', '& > span': { fontWeight: 400 } },
  divider: {
    marginTop: '24px',
    marginBottom: '32px',
  },
  leftColumn: { flexGrow: 1 },
  subtitle1: { fontWeight: 400 },
}));

function MainOwner(props) {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  const { title, description } = props;

  return (
    <Fragment>
      <Grid container alignContent="flex-start">
        <Grid item className={classes.leftColumn}>
          <Typography
            variant={state.isMobileView ? 'h5' : 'h2'}
            gutterBottom
            className={clsx(state.isMobileView && `${classes.title}`)}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            classes={{ subtitle1: classes.subtitle1 }}
          >
            {description.map((item, index) => (
              <Fragment key={index}>
                <span>{item}</span>
                {index + 1 < description.length && (
                  <span aria-hidden="true"> · </span>
                )}
              </Fragment>
            ))}
          </Typography>
        </Grid>
        <Avatar
          alt="Owner"
          className={classes.avatar}
          src="static/media/images/StockSnap_CLELOQWXUP.jpg"
        />
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

MainOwner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

export default MainOwner;
