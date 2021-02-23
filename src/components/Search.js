import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    borderColor: 'rgb(221, 221, 221)',
    borderRadius: '24px',
    fontSize: '0.875rem',
    width: '300px',
    height: '48px',
    justifyContent: 'space-between',
    padding: '6px 12px 6px 22px',
  },
  label: {
    textTransform: 'none',
    fontSize: '0.9333rem',
  },
  searchIcon: {
    backgroundColor: '#FF385C',
    borderRadius: '1.125rem',
    fontSize: '1.875rem',
    padding: '0.375rem',
    color: '#FFFFFF',
  },
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: '2rem',
    },
  },
}));

function Search(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        classes={{
          root: classes.root,
          label: classes.label,
          iconSizeMedium: classes.iconSizeMedium,
        }}
        endIcon={
          <SearchRoundedIcon color="secondary" className={classes.searchIcon} />
        }
        disableElevation
      >
        Start your search
      </Button>
    </React.Fragment>
  );
}

export default Search;
