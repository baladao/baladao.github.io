import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import { render } from 'react-dom';

import Routes from './routes';
import tachyons from './css/tachyons.css';

class App extends React.Component {
  render () {
    return this.props.children;
  }
};

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: Routes.Home,
  childRoutes: [
    Routes.About
  ]
};

import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render (
  <Router history={appHistory} routes={routeConfig} />,
  document.getElementById('app')
);
