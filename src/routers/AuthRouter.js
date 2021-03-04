import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../components/loading';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

const AuthRouter = () => {
  return (
    <Suspense fallback={Loading()}>
      <Switch>
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />

        <Redirect to="/auth/login" />
      </Switch>
    </Suspense>
  );
};

export default AuthRouter;
