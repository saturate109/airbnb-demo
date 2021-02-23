import React, { useContext } from 'react';
import { InView } from 'react-intersection-observer';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Ratings from 'components/Ratings';
import ReportListing from 'components/ReportListing';
import AppContext from 'helpers/AppContext';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    padding: '0px 24px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  gradientButton: {
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '8px',
    padding: '10px 24px',
    fontSize: '1.067rem',
    letterSpacing: 'inherit',
    width: '100%',
    background: 'linear-gradient(to right, #e61e4d, #d70466)',
  },
  cardActions: {
    padding: 0,
  },

  cardHeader: {
    padding: '24px',
  },
  cardHeaderAction: {
    alignSelf: 'auto',
    fontSize: '0.85rem',
    paddingBottom: '0.75rem',
    fontWeight: 500,
  },
  groupedOutlined: {
    fontSize: '0.625rem',
  },
  buttonCheckIn: {
    borderRadius: '12px 0px',
    borderBottomWidth: 0,
    paddingLeft: '11px',
    paddingRight: '0px',
  },
  buttonCheckOut: {
    borderRadius: '0px 12px 0px',
    borderBottomWidth: 0,
  },
  buttonGuests: {
    borderRadius: '0px 0px 12px 12px',
    borderTopWidth: 1,
    marginBottom: '12px',
    paddingLeft: '12px',
  },
  buttonDrop: {
    borderTopWidth: 1,
  },
  buttonLabel: { display: 'block' },
  preSelect: {
    fontWeight: 300,
    textTransform: 'none',
    fontSize: '0.9333rem',
  },
  expandMoreIcon: {
    position: 'absolute',
    right: '0.625rem',
    top: '1rem',
    size: {
      fontSize: '2rem',
    },
  },
  outlinedSizeLarge: {
    padding: '10px',
  },
  titles: {
    fontSize: '0.667rem',
    fontWeight: 600,
    letterSpacing: '0.033rem',
  },
}));

const options = [
  'Create a merge commit',
  'Squash and merge',
  'Rebase and merge',
];

function AddDates() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const { dispatch } = useContext(AppContext);

  return (
    <>
      <Container className={classes.cardGrid} disableGutters={true}>
        {/* End hero unit */}
        <Grid container>
          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <CardHeader
                action={<Ratings />}
                title="Add dates for prices"
                // component={Typography}
                titleTypographyProps={{ variant: 'h3', component: 'span' }}
                classes={{
                  root: classes.cardHeader,
                  action: classes.cardHeaderAction,
                }}
              />
              <CardContent className={classes.cardContent}>
                <ButtonGroup
                  size="large"
                  color="primary"
                  fullWidth={true}
                  classes={{ groupedOutlined: classes.groupedOutlined }}
                >
                  <Button
                    classes={{
                      root: classes.buttonCheckIn,
                      label: classes.buttonLabel,
                      outlinedSizeLarge: classes.outlinedSizeLarge,
                    }}
                  >
                    <Typography
                      display="block"
                      variant="h6"
                      align="left"
                      className={classes.titles}
                    >
                      Check-In
                    </Typography>
                    <Typography
                      display="block"
                      align="left"
                      variant="h5"
                      className={classes.preSelect}
                    >
                      Add date
                    </Typography>
                  </Button>
                  <Button
                    classes={{
                      root: classes.buttonCheckOut,
                      label: classes.buttonLabel,
                      outlinedSizeLarge: classes.outlinedSizeLarge,
                    }}
                  >
                    <Typography
                      display="block"
                      variant="h6"
                      align="left"
                      className={classes.titles}
                    >
                      Check-Out
                    </Typography>
                    <Typography
                      display="block"
                      align="left"
                      variant="h5"
                      className={classes.preSelect}
                    >
                      Add date
                    </Typography>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  size="large"
                  color="primary"
                  fullWidth={true}
                  classes={{ groupedOutlined: classes.groupedOutlined }}
                >
                  <Button
                    classes={{
                      root: classes.buttonGuests,
                      label: classes.buttonLabel,
                      outlinedSizeLarge: classes.outlinedSizeLarge,
                    }}
                    endIcon={
                      <InView
                        onChange={(inView) =>
                          dispatch({
                            type: 'SET_CHECK_AVAILABILITY_STATUS',
                            value: !inView,
                          })
                        }
                      >
                        <ExpandMoreIcon
                          className={classes.expandMoreIcon}
                          classes={{
                            fontSizeLarge: classes.expandMoreIcon.size,
                          }}
                        />
                      </InView>
                    }
                    onClick={handleToggle}
                  >
                    <Typography
                      display="block"
                      variant="h6"
                      align="left"
                      className={classes.titles}
                    >
                      Guests
                    </Typography>

                    <Typography
                      display="block"
                      align="left"
                      variant="h5"
                      className={classes.preSelect}
                    >
                      1 guest
                    </Typography>
                  </Button>
                </ButtonGroup>

                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                <CardActions classes={{ root: classes.cardActions }}>
                  <Button
                    variant="contained"
                    className={classes.gradientButton}
                    disableElevation
                  >
                    Check availabillity
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <ReportListing />
      </Container>
    </>
  );
}

export default AddDates;
