import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import { INDEX } from "./routes";
import AppliedRoute from "./AppliedRoute";
import Loading from "../components/Loading";

const Home = Loadable({
  loader: () => import("../containers/Home"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("../containers/NotFound"),
  loading: Loading
});

const Router = ({ childProps }) => (
  <Switch>
    <AppliedRoute path={INDEX} exact component={Home} props={childProps} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
