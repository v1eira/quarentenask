/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// import Redirect junto com Route

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  // isPrivate = false,
  ...rest
}) {
  const authPages = Component.name === 'SignIn' || Component.name === 'SignUp';

  const Layout = authPages ? AuthLayout : DefaultLayout;

  // const signed = false;

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/home" />;
  // }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
