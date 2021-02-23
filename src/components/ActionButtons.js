import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Share } from '@material-ui/icons';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles(() => ({
  container: { position: 'relative' },
  group: { position: 'absolute', bottom: '-8px', right: '0px' },
  actionButton: {
    textTransform: 'none',
    borderRadius: '0.5rem',
    textDecoration: 'underline',
  },
  shareButton: {
    extend: 'actionButton',
    marginRight: '0.5rem',
  },
  saveButton: {
    extend: 'actionButton',
  },
}));

function ActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.group}>
        <Button className={classes.shareButton} startIcon={<Share />}>
          Share
        </Button>
        <Button
          className={classes.saveButton}
          startIcon={<FavoriteBorderOutlinedIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default ActionButtons;
