import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Detail from "./features/detail/Detail";

export default () => {
  return (
    <Switch>
      <Route path="/photos/:id" component={Detail} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
