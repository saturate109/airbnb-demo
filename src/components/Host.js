import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { SvgIcon } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import AppContext from 'helpers/AppContext';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '56px',
    height: '56px',
    marginRight: '16px',
  },
  host: {
    flexWrap: 'wrap',
    marginBottom: '24px',
    '@media (min-width: 1128px)': {
      float: 'left',
      width: '41.6667%',
      marginRight: '8.33333%',
    },
  },
  box: {
    margin: '48px 0 48px 0',
  },
  text: {
    width: '100%',
    margin: '0.8rem 0 1.63rem 0',
    fontSize: '1.03rem',
    fontWeight: 400,
  },
  starIcon: {
    fontSize: ' 1.333rem',
    verticalAlign: 'top',
    marginRight: '10px',
  },
  list: {
    paddingTop: 0,
    paddingBottom: '32px',
  },
  listItem: {
    padding: '0 0 5px 0',
    margin: 0,
  },
  listItemText: {
    margin: 0,
  },
  buttonOutlined: {
    borderColor: '#000000',
  },
  button: {
    textTransform: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px 25px',
    marginBottom: '24px',
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      width: '100%',
    },
  },
  shieldIcon: { fill: '#E6A303' },
  shieldGrid: {
    maxWidth: '35px',
  },
  shieldText: {
    fontSize: '0.8rem',
    letterSpacing: 0,
    lineHeight: '1.067rem',
  },
  introGrid: {
    flexBasis: '41.6667%',
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      flexBasis: 'auto',
    },
  },
  intro: {
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      marginBottom: '0px',
    },
  },
  features: {
    width: '41.6667%',
    marginLeft: '8.33333%',
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      width: 'auto',
      marginLeft: 0,
    },
  },
}));

const listItems = [
  'Languages: English, Français',
  'Response rate: 98%',
  'Response time: within a few hours',
];

function Host(props) {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <Box classes={{ root: classes.box }}>
      <ListItem disableGutters className={classes.host}>
        <ListItemAvatar>
          <Avatar
            alt="Owner"
            className={classes.avatar}
            src="static/media/images/StockSnap_CLELOQWXUP.jpg"
          >
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Hosted by John"
          secondary="Joined in November 2015"
          primaryTypographyProps={{ variant: 'h2', gutterBottom: true }}
        />
      </ListItem>
      <Grid container spacing={3}>
        <Grid
          item
          xs={!state.isMobileView ? 6 : 12}
          className={classes.introGrid}
        >
          <SvgIcon
            component={Star}
            color="secondary"
            className={classes.starIcon}
          />
          <Typography display="inline" variant="body1">
            2427 Reviews
          </Typography>
          <Box fontSize="body1.fontSize" my={4} className={classes.intro}>
            Hi, I am John. We offer modern luxury houses in Hackney, London,
            right by the river Thames, only 10 minutes from the Canary Wharf and
            across the river from Greenwich, a... read more
          </Box>
        </Grid>
        <Grid
          item
          xs={!state.isMobileView ? 6 : 12}
          className={classes.features}
        >
          <List classes={{ padding: classes.list }}>
            {listItems.map((text, index) => (
              <ListItem key={index} classes={{ root: classes.listItem }}>
                <ListItemText
                  primary={text}
                  classes={{ root: classes.listItemText }}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            size="large"
            classes={{ outlined: classes.buttonOutlined, root: classes.button }}
          >
            Contact host
          </Button>
          <Grid container>
            <Grid
              container
              direction="column"
              justify="center"
              className={classes.shieldGrid}
            >
              <SvgIcon
                component={VerifiedUserTwoToneIcon}
                color="primary"
                classes={{ root: classes.shieldIcon }}
              />
            </Grid>
            <Grid item xs={9} className={classes.shieldText}>
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Host;
