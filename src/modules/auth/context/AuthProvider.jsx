import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer, initialState } from './authReducer';
import { types } from '../types/types';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {
    const user = { name };
    const action = {
      type: types.login,
      payload: {
        user
      }
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login: login, ...state, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
