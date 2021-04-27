import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const routes = [
  //Home
  {
    path: '/home',
    models: () => [import('./models/homeM')],
    component: () => import('./routes/home'),
  },
];

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, ...dynamics }, key) => (
          <Route
            key={key}
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics,
            })}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
