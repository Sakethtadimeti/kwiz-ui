import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicPage from "./pages/dynamic-page";
import { createBrowserHistory } from "history";
import Header from "./features/header/header-component";

const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <DynamicPage filePath="features/intro/intro-component.js" />
          )}
        />
        <Route
          path="/dashboard"
          exact
          component={() => <DynamicPage filePath="features/dashboard" />}
        />
      </Switch>
    </Router>
  );
};
export default AppRouter;
