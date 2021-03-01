import { createContext } from 'react';

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOBILEVIEW':
      return { ...state, isMobileView: action.value };
    case 'SET_CHECK_AVAILABILITY_STATUS':
      return { ...state, showCheckAvailability: action.value };
    default:
      throw new Error();
  }
};

export const InitialState = {
  showCheckAvailability: true,
  isMobileView: false,
};

const AppContext = createContext(null);
export default AppContext;
