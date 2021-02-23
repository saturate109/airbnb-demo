import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import LanguageIcon from '@material-ui/icons/Language';
import AppContext from 'helpers/AppContext';
import { ReactComponent as Logo } from 'assets/svg/airbnb-logo.svg';
import { ReactComponent as ShareIcon } from 'assets/svg/share-icon.svg';
import { ReactComponent as FavouriteIcon } from 'assets/svg/favourite-icon.svg';
import { ReactComponent as LeftArrowIcon } from 'assets/svg/left-arrow-icon.svg';

import Search from 'components/Search';
import Hamburger from 'components/Hamburger';
import { useMedia } from 'helpers/Hooks';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    [theme.breakpoints.down(745)]: {
      height: '64px',
    },
    [theme.breakpoints.up(745)]: {
      marginBottom: '24px',
    },
  },
  toolbarTitle: {
    flex: 1,
    marginLeft: '13%',
    [theme.breakpoints.between(745, 949)]: {
      marginLeft: '20px',
      display: 'flex',
    },
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  sectionRight: {
    width: 'auto',
  },
  LeftArrowIcon: {
    marginRight: '10px',
  },
  shareIcon: {
    marginRight: '16px',
  },
  mobileHeader: { marginLeft: '8px', marginRight: '8px' },
}));

const logoDim = {
  large: { x: 102, y: 32 },
  small: {
    x: 32,
    y: 32,
  },
};

function Header() {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  const theme = useTheme();
  const svgDim = useMedia(
    [`${theme.breakpoints.up('lg')}`],
    [logoDim.large],
    logoDim.small
  );

  return (
    <React.Fragment>
      <Toolbar classes={{ root: classes.toolbar }} disableGutters={true}>
        {!state.isMobileView && (
          <>
            <Logo
              width={svgDim.x}
              height={svgDim.y}
              viewBox={`0 0 ${svgDim.x} ${svgDim.y}`}
            />
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              align="center"
              noWrap
              classes={{ root: classes.toolbarTitle }}
            >
              <Search />
            </Typography>
            <Grid
              container
              alignItems="center"
              classes={{ root: classes.sectionRight }}
            >
              <Typography color="inherit" align="center" noWrap variant="h6">
                Become a host
              </Typography>
              <IconButton>
                <LanguageIcon />
              </IconButton>
              <Hamburger />
            </Grid>
          </>
        )}
        {state.isMobileView && (
          <Grid container alignItems="center" className={classes.mobileHeader}>
            <Grid item>
              <LeftArrowIcon className={classes.LeftArrowIcon} />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              Homes <span aria-hidden="true"> · </span> Airbnb
            </Grid>
            <Grid container style={{ width: 'auto' }}>
              <ShareIcon className={classes.shareIcon} />
              <FavouriteIcon />
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
