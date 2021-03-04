import { LOADED, LOADING, LOGIN, LOGOUT } from '../types';

const initialState = {
  logged: false,
  loading: false,
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  const expiredAt = localStorage.getItem('expiredAt');
  const now = +new Date();

  if (expiredAt && now > JSON.parse(expiredAt)) {
    localStorage.removeItem('token');
    localStorage.removeItem('expiredAt');
    return {
      ...state,
      user: null,
      logged: false,
    };
  }

  switch (type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        user: { uid: payload.uid, name: payload.name, email: payload.email },
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        logged: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
