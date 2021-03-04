import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import {
  loadedAction,
  loadingAction,
  loginAction,
  logoutAction,
} from '../actions/auth';
import { authJWT } from '../api/authAPI';
import { getEventsDB } from '../api/eventsAPI';
import { loadEvents, purgeEvents } from '../actions/events';

import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Loading from '../components/loading';

const MainRouter = () => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadingAction());
    authJWT().then(async ({ ok, ...rest }) => {
      if (!ok) {
        dispatch(purgeEvents());
        dispatch(logoutAction());
        return dispatch(loadedAction());
      }

      dispatch(loginAction(rest));
      const { events, assigned } = await getEventsDB(rest.uid);
      dispatch(loadEvents({ events, assigned }));

      dispatch(loadedAction());
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Switch>
            <PublicRoutes path="/auth" isAuth={logged} component={AuthRouter} />
            <PrivateRoutes path="/home" isAuth={logged} component={AppRouter} />

            <Redirect to="/auth" />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default MainRouter;
