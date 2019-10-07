import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { INDEX } from './routes';
import AppliedRoute from './AppliedRoute';
import Loading from 'components/Loading';

const Home = lazy(() => import('containers/Home'));

const NotFound = lazy(() => import('containers/NotFound'));

const Router = ({ childProps }) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <AppliedRoute path={INDEX} exact component={Home} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Router;
