const Layout = {
  box: {
    width: '100%',
    '@media (min-width:745px) and (max-width: 1127px)': {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    '@media (min-width:1128px)': {
      paddingLeft: '80px',
      paddingRight: '80px',
    },
  },
  container: {
    '@media (min-width:745px)': {
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
};

export default Layout;
