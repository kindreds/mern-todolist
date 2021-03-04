import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PublicRoutes = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuth ? <Redirect to="/home" /> : <Component {...props} />
    }
  />
);

PublicRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoutes;
