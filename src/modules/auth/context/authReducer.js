import { types } from '../types/types';

export const initialState = {
  logged: false
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload.user
      };

    case types.logout:
      return {
        logged: false
      };

    default:
      return state;
  }
};
