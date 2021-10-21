import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

const PageTest = lazy(() => import('../app/modules/Test'));
const PageTest2 = lazy(() => import('../app/modules/Test2'));

const BasePage: React.FC = () => {
  return (
    <Suspense fallback={'...Loading'}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/test" />
        }
        <Route exact path="/test" component={PageTest} />
        <Route exact path="/test2" component={PageTest2} />
      </Switch>
    </Suspense>
  );
};

export default BasePage;
