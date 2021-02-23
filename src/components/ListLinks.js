import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  list: { display: 'flex', flexWrap: 'wrap', marginLeft: '-12px' },
  gutters: { paddingLeft: 0 },
  listItem: {
    [theme.breakpoints.between('tablet', 'md')]: {
      flexBasis: '33.33%',
    },

    paddingLeft: '12px',
    fontSize: '0.9333rem',
    marginBottom: '5px',
  },
}));

function ListLinks({ list = [] }) {
  const classes = useStyles();
  return (
    <>
      <List dense={true} classes={{ root: classes.list }}>
        {list.map((item, index) => (
          <ListItem
            classes={{ root: classes.listItem, gutters: classes.gutters }}
            key={index}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListLinks;
