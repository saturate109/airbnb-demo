import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '56px',
    height: '56px',
  },
  listItem: {
    flexWrap: 'wrap',
    '@media (min-width: 1128px)': {
      float: 'left',
      width: '41.6667%',
      marginRight: '8.33333%',
    },
  },
  listItemText: {
    marginLeft: '10px',
  },
  text: {
    flexBasis: '100%',
    margin: '0.8rem 0 1.63rem 0',
    fontSize: '1.03rem',
    fontWeight: 400,
  },
}));

function Score(props) {
  const { name, date, avatar, text } = props;
  const classes = useStyles();
  return (
    <ListItem disableGutters className={classes.listItem}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} classes={{ root: classes.avatar }}>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={date}
        classes={{ root: classes.listItemText }}
      />
      <Typography variant="h5" gutterBottom className={classes.text}>
        {text}
      </Typography>
    </ListItem>
  );
}

export default Score;
