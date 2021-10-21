import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import BasePage from './BasePage';
import { Redirect } from 'react-router';
import AuthPage from './modules/Auth/Auth';
import Layout from '../_config/Layout/components/Layout';
// import Layout from '../_config/Layout/components/Layout';

export default function Routes(): JSX.Element {
  const [auth] = useState<boolean>(true);

  return (
    <Switch>
      {!auth ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/login" to="/" />
      )}
      {!auth ? (
        <Redirect to="/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}
