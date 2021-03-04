import { LOADED, LOADING, LOGIN, LOGOUT } from '../../types';
import { authAPI } from '../../api/authAPI';
import { getEventsDB } from '../../api/eventsAPI';
import { loadEvents } from '../events';

const loadingAction = () => ({
  type: LOADING,
});
const loadedAction = () => ({
  type: LOADED,
});

const loginAction = ({ uid, name, email }) => ({
  type: LOGIN,
  payload: { uid, name, email },
});

const logoutAction = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiredAt');
  return {
    type: LOGOUT,
  };
};

const authentication = (payload, path, setErrors) => async (dispatch) => {
  const { ok, errors, expiredAt, token, ...rest } = await authAPI(
    payload,
    path
  );

  if (!ok && errors) return setErrors({ ok, ...errors });

  localStorage.setItem('token', JSON.stringify(token));
  localStorage.setItem('expiredAt', JSON.stringify(expiredAt));
  dispatch(loginAction(rest));

  const { events, assigned } = await getEventsDB(rest.uid);
  dispatch(loadEvents({ events, assigned }));
};

export {
  authentication,
  loginAction,
  logoutAction,
  loadingAction,
  loadedAction,
};
