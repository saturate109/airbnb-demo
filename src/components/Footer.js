import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import Layout from 'assets/jss/Layout';

const bulletList = [
  'Privacy',
  'Terms',
  'Sitemap',
  'UK Modern Slavery Act',
  'Company details',
];

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'© ' + new Date().getFullYear() + ' Airbnb, Inc. All rights reserved'}
    </Typography>
  );
}

function Links() {
  const classes = useStyles();
  return (
    <ol className={classes.bulletList}>
      {bulletList.map((item, index) => (
        <li key={index}>
          {index > 0 && <BulletPoint />} {item}
        </li>
      ))}
    </ol>
  );
}

function SocialMedia() {
  const classes = useStyles();
  return (
    <Box style={{ display: 'inline-flex' }}>
      <LanguageIcon style={{ marginRight: '20px' }} />
      <Link href="#" variant="h6" underline="always">
        English (GB)
      </Link>
      <span className={classes.currency}>
        £&nbsp;
        <Link href="#" variant="h6" underline="always">
          GBP
        </Link>
      </span>
    </Box>
  );
}

function LanguageAndCurrency() {
  return (
    <>
      <FacebookIcon />
      <TwitterIcon style={{ margin: '0px 20px 0px 20px' }} />
      <InstagramIcon />
    </>
  );
}

function BulletPoint() {
  return <span aria-hidden="true">·</span>;
}

const useStyles = makeStyles((theme) => ({
  ...Layout,
  footer: {
    background: '#F7F7F7',
    padding: '0px 0px 24px 0px',
  },
  bulletList: {
    margin: 0,
    paddingLeft: 0,
    fontSize: '0.9333rem',
    '& span': {
      padding: '0 3px 0 3px',
    },
    '&>li': {
      display: 'inline-block',
    },
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row-reverse',
      alignItems: 'start',
    },
  },
  currency: {
    paddingLeft: '25px',
    paddingRight: '55px',
  },
  firstRow: {
    paddingBottom: '10px',
  },
  secondRow: {
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      '&>p': {
        textAlign: 'left',
      },
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <footer className={classes.footer}>
        <Grid container classes={{ root: classes.container }}>
          <Grid item classes={{ root: classes.firstRow }}>
            <SocialMedia />
            <LanguageAndCurrency />
          </Grid>
          <Grid item classes={{ root: classes.secondRow }}>
            <Copyright />
            <Links />
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
}

export default Footer;
