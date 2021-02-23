import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PetsIcon from '@material-ui/icons/Pets';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import FlareIcon from '@material-ui/icons/Flare';
import BathtubIcon from '@material-ui/icons/Bathtub';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Link from '@material-ui/core/Link';
import { ReactComponent as RightArrowIcon } from 'assets/svg/right-arrow-icon.svg';
import AppContext from 'helpers/AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '48px 0px 48px 0px',
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      padding: '0px',
    },
  },
  header: { fontWeight: 500 },
  icon: { fontSize: '1.067rem', color: 'black' },
  gutterBottom: { marginBottom: '24px' },
  gridItem: {
    paddingRight: '24px',
    '&:last-child>ul': {
      marginRight: 0,
    },
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      paddingRight: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  list: {
    paddingBottom: '24px',
    marginRight: '32px',
  },
  listItem: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: '32px',
  },
  listItemText: {
    marginTop: '5px',
    marginBottom: 0,
    '& > span': {
      lineHeight: '1.333rem',
    },
  },
  listItemTextTypography: {
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      color: '#717171',
      fontSize: '0.8667rem',
    },
  },
  rightArrow: {
    height: '12px',
    width: '12px',
    display: 'inline-block',
    fill: 'rgb(34, 34, 34)',
    marginLeft: '4px',
  },
  link: { fontWeight: 500 },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    title: {
      paddingTop: '24px',
    },
  },
  box: {
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      flexGrow: 1,
    },
  },
}));

const houseRules = {
  title: 'House rules',
  items: [
    { text: 'Check-in: 14:00 - 21:00', icon: ScheduleIcon },
    { text: 'Check out: 10:00', icon: ScheduleIcon },
    { text: 'No smoking', icon: SmokeFreeIcon },
    { text: 'No pets', icon: PetsIcon },
    { text: 'No parties or events', icon: LocalBarIcon },
  ],
  moreLink: { text: 'Show all', link: '#' },
};

const healthSafety = {
  title: 'Health & safety',
  items: [
    {
      text: "Committed to Airbnb's enhanced cleaning process. Learn more",
      icon: FlareIcon,
    },
    {
      text:
        "Airbnb's social distancing and other COVID-19-related guidelines apply",
      icon: BathtubIcon,
    },
    { text: 'Carbon monoxide alarm', icon: CheckCircleIcon },
    { text: 'Smoke alarm', icon: CheckCircleIcon },
  ],
  moreLink: { text: 'Show all', link: '#' },
};

const cancellationPolicy = {
  title: 'Cancellation policy',
  items: [
    {
      text:
        'Add your trip dates to get the cancellation details for this stay.',
      icon: null,
    },
  ],
  moreLink: { text: 'Add dates', link: '#' },
};

function GreaterThanIcon() {
  const classes = useStyles();

  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={classes.rightArrow}
    >
      <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
    </svg>
  );
}

function ThingsToKnow() {
  const classes = useStyles();
  const { state } = useContext(AppContext);
  const lists = [houseRules, healthSafety, cancellationPolicy];

  return (
    <Container classes={{ root: classes.root }}>
      {!state.isMobileView && (
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          classes={{ root: classes.header, gutterBottom: classes.gutterBottom }}
        >
          Things to know
        </Typography>
      )}
      <Grid container direction={state.isMobileView ? 'column' : 'row'}>
        {lists.map((list, index) => (
          <Fragment key={index}>
            <Grid
              item
              key={index}
              xs={state.isMobileView ? 12 : 4}
              classes={{ root: classes.gridItem }}
            >
              <Box className={classes.box}>
                <Typography
                  variant={state.isMobileView ? 'h3' : 'h5'}
                  className={classes.title}
                >
                  {list.title}
                </Typography>

                <List classes={{ padding: classes.list }}>
                  <>
                    {list.items.map((item, index) => {
                      return (
                        (state.isMobileView && index > 0) || (
                          <ListItem
                            alignItems="flex-start"
                            disableGutters={true}
                            classes={{ root: classes.listItem }}
                            key={index}
                          >
                            {!state.isMobileView && item.icon && (
                              <ListItemIcon
                                classes={{ root: classes.listItemIcon }}
                              >
                                {React.createElement(item.icon, {
                                  fontSize: 'small',
                                  classes: { root: classes.icon },
                                })}
                              </ListItemIcon>
                            )}
                            <ListItemText
                              primary={item.text}
                              primaryTypographyProps={{
                                variant: 'body1',
                                className: classes.listItemTextTypography,
                              }}
                              classes={{ root: classes.listItemText }}
                            />
                          </ListItem>
                        )
                      );
                    })}
                  </>
                </List>
              </Box>
              {!state.isMobileView && list.moreLink && (
                <Link
                  href={list.moreLink.link}
                  variant="body1"
                  underline="always"
                  classes={{ root: classes.link }}
                >
                  {list.moreLink.text}
                  <GreaterThanIcon />
                </Link>
              )}
              {state.isMobileView && (
                <Grid item>
                  <RightArrowIcon />
                </Grid>
              )}
            </Grid>
            {state.isMobileView && <Divider />}
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}

export default ThingsToKnow;
