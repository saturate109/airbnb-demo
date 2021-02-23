import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Layout from 'assets/jss/Layout';
import ListLinks from 'components/ListLinks';

const boxStyles = {
  box: {
    ...Layout.box,
    ...{ padding: '16px 0px 24px 0px', background: '#F7F7F7' },
  },
};

const useStyles = makeStyles((theme) => ({
  ...Layout,
  ...boxStyles,
  boxInner: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '1128px',
      width: '100%',
      margin: 'auto',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
  container: {
    padding: '24px 0px 0px 0px',
    '&:last-child hr': {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '25%',
    },
  },
  gutterBottom: { marginBottom: '24px' },
  title: {
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  subtitle1: { fontWeight: 400, marginBottom: '38px' },
  bulletList: {
    margin: 0,
    paddingLeft: 0,
    fontWeight: 400,
    fontSize: '1rem',
    color: '#717171',
    '& span': {
      padding: '0 3px 0 3px',
    },
    '&>li': {
      display: 'inline-block',
    },
  },
  listItem: {
    color: '#717171',
    marginBottom: '18px',
    fontSize: '1.067rem',
  },
  listContainer: {
    paddingBottom: '10px',
  },
  divider: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

const lists = [
  {
    title: 'About',
    items: [
      'How Airbnb works',
      'Newsroom',
      'Investors',
      'Airbnb Plus',
      'Airbnb Luxe',
      'HotelTonight',
      'Airbnb for Work',
      'Olympics',
      'Careers',
    ],
  },
  {
    title: 'Community',
    items: [
      'Diversity & Belonging',
      'Accessibility',
      'Airbnb Associates',
      'Frontline Stays',
      'Invite friends',
      'Airbnb.org',
    ],
  },
  {
    title: 'Host',
    items: [
      'Host your home',
      'Host an Online Experience',
      'Host an Experience',
      'Responsible hosting',
      'Resource Centre',
      'Community Centre',
    ],
  },
  {
    title: 'Support',
    items: [
      'Our COVID-19 Response',
      'Help Centre',
      'Cancellation options',
      'Neighbourhood Support',
      'Trust & Safety',
    ],
  },
];

function SiteLinks() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.boxInner}>
        {lists.map((list, index) => (
          <Container
            maxWidth="lg"
            classes={{ root: classes.container }}
            key={index}
          >
            <Typography
              component="h6"
              variant="h6"
              gutterBottom
              classes={{ root: classes.title }}
            >
              {list.title}
            </Typography>
            <Box className={classes.listContainer}>
              <ListLinks list={list.items} />
            </Box>
            <Divider className={classes.divider} />
          </Container>
        ))}
      </Box>
      <Divider />
    </Box>
  );
}

export default SiteLinks;
