import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import FireplaceOutlinedIcon from '@material-ui/icons/FireplaceOutlined';

const useStyles = makeStyles((theme) => ({
  root: { padding: '48px 0px 48px 0px' },
  list: {
    paddingBottom: '2rem',
  },
  gutterBottom: {
    marginBottom: '24px',
  },
  listItem: {
    paddingTop: 0,
  },
  listItemIcon: {
    color: '#000000',
    fontWeight: 300,
    minWidth: '45px',
    fontSize: '1.875rem',
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
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      width: '100%',
    },
  },
}));

const amenities = [
  {
    icon: <CopyrightOutlinedIcon fontSize="inherit" />,
    text: 'Free parking on premises',
  },
  { icon: <WifiOutlinedIcon fontSize="inherit" />, text: 'Wifi' },
  { icon: <RestaurantOutlinedIcon fontSize="inherit" />, text: 'Kitchen' },
  {
    icon: <FireplaceOutlinedIcon fontSize="inherit" />,
    text: 'Indoor fireplace',
  },
  {
    icon: <LocalLaundryServiceOutlinedIcon fontSize="inherit" />,
    text: 'Dryer',
  },
];

function Amenities() {
  const classes = useStyles();
  return (
    <Container classes={{ root: classes.root }}>
      <Typography component="h2" variant="h2" gutterBottom>
        Amenities
      </Typography>
      <List classes={{ root: classes.list }}>
        {amenities.map(({ icon, text }, index) => (
          <ListItem
            disableGutters
            classes={{ root: classes.listItem }}
            key={index}
          >
            <ListItemIcon
              classes={{ root: classes.listItemIcon }}
              children={icon}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
        size="large"
        classes={{ outlined: classes.buttonOutlined, root: classes.button }}
      >
        Show all 34 amenities
      </Button>
    </Container>
  );
}

export default Amenities;
