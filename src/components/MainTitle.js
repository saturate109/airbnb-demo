import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ActionButtons from 'components/ActionButtons';
import Ratings from 'components/Ratings';
import AppContext from 'helpers/AppContext';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: '600',
    fontSize: '1.667rem',
  },
  reviews: { fontWeight: 400, color: '#717171' },
  location: { textDecoration: 'underline', whiteSpace: 'nowrap' },
  gutterBottom: { marginBottom: '0.9333rem' },
  gutterTop: { marginTop: '0.9333rem' },
  ratings: { marginBottom: '1.25rem' },
}));

const MainTitle = ({ title }) => {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <Grid item xs={12}>
      <Typography
        variant="h1"
        gutterBottom
        classes={{ gutterBottom: classes.gutterBottom }}
        className={clsx(state.isMobileView && `${classes.title}`)}
      >
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom classes={{ root: classes.ratings }}>
        <Ratings />
        &nbsp;·&nbsp;
        <Link
          display={state.isMobileView ? 'block' : 'inline'}
          href={'#'}
          color="textSecondary"
          className={clsx(
            classes.location,
            state.isMobileView && `${classes.gutterTop}`
          )}
        >
          Greater London, England, United Kingdom
        </Link>
        {!state.isMobileView && <ActionButtons />}
      </Typography>
    </Grid>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

MainTitle.defaultProps = {
  title: '',
};

export default MainTitle;
