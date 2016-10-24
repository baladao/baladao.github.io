import React from 'react';
import { Home } from '../pages';

class HomeHandler extends React.Component {
  render () {
    return (
      <Home { ...this.props } />
    );
  }
};

const HomeRoutes = {
  component: HomeHandler
};

export default HomeRoutes;
