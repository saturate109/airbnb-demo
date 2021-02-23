import React, { Fragment, useState, useReducer, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext, { AppReducer, InitialState } from 'helpers/AppContext';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { InView } from 'react-intersection-observer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from 'components/Header';
import MainFeaturedPost from 'components/MainFeaturedPost';
import MainOwner from 'components/MainOwner';
import MainTitle from 'components/MainTitle';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import TravelRestrictions from 'components/TravelRestrictions';
import FeaturesList from 'components/FeaturesList';
import Description from 'components/Description';
import SleepingArrangements from 'components/SleepingArrangements';
import Amenities from 'components/Amenities';
import FixedHeader from 'components/FixedHeader';
import CalendarPicker from 'components/CalendarPicker';
import Reviews from 'components/Reviews';
import Location from 'components/Location';
import Host from 'components/Host';
import ThingsToKnow from 'components/ThingsToKnow';
import Layout from 'assets/jss/Layout';
import PlacesToStay from 'components/PlacesToStay';
import ThingsToDoNearby from 'components/ThingsToDoNearby';
import ExploreOptions from 'components/ExploreOptions';
import SiteLinks from 'components/SiteLinks';
import MainSlider from 'components/MainSlider';
import { useMedia } from 'helpers/Hooks';
import 'assets/scss/pages/Homepage.scss';

const useStyles = makeStyles((theme) => ({
  ...Layout,
  main: {
    [theme.breakpoints.down(745)]: {
      paddingTop: '8px',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    '&::after': {
      top: '0px',
      height: '80px',
      content: '""',
      position: 'absolute',
      boxShadow: 'rgba(0,0,0,0.08) 0px 1px 12px !important',
      width: '100%',
      left: '0px',
      [theme.breakpoints.down(745)]: {
        height: '64px',
      },
    },
  },

  mainGrid: {
    marginTop: '38px',
  },
  sidebar: {
    marginLeft: '8.333333%',
    minWidth: '33.333333%',
  },
}));

export default function Homepage() {
  const classes = useStyles();
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const isMobileView = useMedia(['(max-width: 744px)'], [true], false);
  const [state, dispatch] = useReducer(AppReducer, {
    ...InitialState,
    isMobileView,
  });

  useEffect(() => {
    dispatch({ type: 'SET_MOBILEVIEW', value: isMobileView });
  }, [isMobileView]);

  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>
            Lovely 4 bedroom house private patio, garden - Houses for Rent in
            Greater London, England, United Kingdom
          </title>
        </Helmet>
      </HelmetProvider>
      <AppContext.Provider value={{ state, dispatch }}>
        <Box className={classes.box}>
          <Container maxWidth="lg" classes={{ root: classes.container }}>
            <Fragment>
              {showFixedHeader && !isMobileView && (
                <FixedHeader
                  showCheckAvailability={state.showCheckAvailability}
                />
              )}
              <Header className={classes.header} />
            </Fragment>
          </Container>

          {isMobileView && <MainSlider />}

          <Container
            maxWidth="lg"
            className={classes.main}
            classes={{ root: classes.container }}
          >
            <MainTitle title="Lovely 4 bedroom house with private patio, garden" />
            {isMobileView && <Divider />}
            <InView onChange={(inView) => setShowFixedHeader(!inView)}>
              {isMobileView || <MainFeaturedPost />}
            </InView>

            <Grid container className={classes.mainGrid} wrap="nowrap">
              <Grid item xs={isMobileView ? 12 : 8}>
                <MainOwner
                  title="Entire house hosted by John"
                  description={[
                    '5 guests',
                    '2 bedrooms',
                    '4 beds',
                    '2.5 bathrooms',
                  ]}
                />
                <TravelRestrictions />
                <Divider />
                <FeaturesList />
                <Divider />
                <Description />
                <Divider />
                <SleepingArrangements />
                <Divider />
                <Amenities />
                <Divider />
                <CalendarPicker />
              </Grid>
              {!isMobileView && (
                <Grid item xs={4} className={classes.sidebar}>
                  <Sidebar />
                </Grid>
              )}
            </Grid>
            <Divider />
            <Reviews />
            <Divider />
            <Location />
            <Divider />
            <Host />
            <Divider />
            <ThingsToKnow />
          </Container>
        </Box>
        <PlacesToStay />
        <ThingsToDoNearby />
        <Divider />
        <ExploreOptions />
        {!isMobileView && (
          <>
            <Divider />
            <SiteLinks />
            <Footer />
          </>
        )}
      </AppContext.Provider>
    </Fragment>
  );
}
