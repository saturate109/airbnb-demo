import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    color: '#000000',
    padding: '32px 0px 48px 0px',
    lineHeight: '1.5rem',
  },
  colorTextPrimary: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  gutterBottom: {
    marginBottom: '32px',
  },
});

function FeaturesList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container classes={{ root: classes.root }}>
        <Typography
          variant="body1"
          gutterBottom
          classes={{ gutterBottom: classes.gutterBottom }}
        >
          Stunning and spacious four bedroom Edwardian house in a beautiful
          upmarket residential area of Hackney, East London. Direct 10 minutes
          journey by underground to the centre of London, 5 min to London
          Bridge. Station within easy 2 min walk. Use of a large walled garden
          with swings, trampoline and kids playground. Ideal for families with
          kids.
        </Typography>
        <Typography variant="h5">The Space</Typography>
        <Typography
          variant="body1"
          gutterBottom
          classes={{ gutterBottom: classes.gutterBottom }}
        >
          The Edwardian House has been refurbished to the highest... read more
        </Typography>
        <Link href="#" variant="h5" underline="always">
          Contact host
        </Link>
      </Container>
    </React.Fragment>
  );
}

export default FeaturesList;
