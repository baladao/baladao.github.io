import React from 'react';
import { About } from '../pages';

class AboutHandler extends React.Component {
  render () {
    return (
      <About { ...this.props } />
    );
  }
};

const AboutRoutes = {
  component: AboutHandler
};

export default AboutRoutes;
