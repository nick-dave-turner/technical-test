import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
