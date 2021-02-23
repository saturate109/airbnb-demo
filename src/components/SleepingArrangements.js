import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import SingleBedOutlinedIcon from '@material-ui/icons/SingleBedOutlined';
import ArrowButton from 'components/elements/ArrowButton';

const useStyles = makeStyles({
  root: {
    padding: '48px 0px 48px 0px',
    position: 'relative',
  },
  gridList: {
    flexWrap: 'nowrap',
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  gutterBottom: {
    marginBottom: '24px',
  },
  icons: {
    marginBottom: '1rem',
  },
  card: {
    borderRadius: '12px',
  },
  forwardArrow: {
    '--height': '16px',
    position: 'absolute',
    zIndex: 1,
    right: '-14px',
    top: 'calc(var(--height)/2 + 50%)',
  },
});

function SleepingArrangements() {
  const classes = useStyles();
  return (
    <Container classes={{ root: classes.root }}>
      <Typography
        component="h3"
        variant="h3"
        gutterBottom={true}
        classes={{
          gutterBottom: classes.gutterBottom,
        }}
      >
        Sleeping arrangements
      </Typography>
      <ArrowButton direction="next" className={classes.forwardArrow} />
      <GridList
        cellHeight="auto"
        className={classes.gridList}
        cols={2}
        rows={1}
        spacing={16}
      >
        <GridListTile>
          <Card variant="outlined" classes={{ root: classes.card }}>
            <CardContent>
              <KingBedOutlinedIcon
                fontSize="large"
                classes={{ root: classes.icons }}
              />
              <Typography gutterBottom variant="h5" component="h5">
                Bedroom 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                1 double bed
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
        <GridListTile>
          <Card variant="outlined" classes={{ root: classes.card }}>
            <CardContent>
              <SingleBedOutlinedIcon
                fontSize="large"
                classes={{ root: classes.icons }}
              />
              <SingleBedOutlinedIcon
                fontSize="large"
                classes={{ root: classes.icons }}
              />
              <Typography gutterBottom variant="h5" component="h5">
                Bedroom 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                2 single beds
              </Typography>
            </CardContent>
          </Card>
        </GridListTile>
      </GridList>
    </Container>
  );
}

export default SleepingArrangements;
