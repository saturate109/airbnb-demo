import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  listItemIcon: {
    color: '#000000',
    fontWeight: 300,
  },
});

function FeaturesList() {
  const classes = useStyles();
  return (
    <List>
      <ListItem alignItems="flex-start" disableGutters>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <HomeOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Entire home"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              You'll have the house to yourself.
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" disableGutters>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <LocalLaundryServiceOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Enhanced Clean"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {
                "This host committed to Airbnb's 5-step enhanced cleaning process. "
              }
              Learn more
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" disableGutters>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <TurnedInNotOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Free parking on premises"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {'This is one of a few places in the area that has this feature.'}
              Learn more
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" disableGutters>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <EventBusyOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Cancellation policy"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {
                'Add your trip dates to get the cancellation details for this stay.'
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start" disableGutters>
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <MenuBookOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="House rules"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {'The host doesn’t allow pets, parties, or smoking. '}
              Get details
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default FeaturesList;
