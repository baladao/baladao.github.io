import React from 'react';

class Job extends React.Component {

  constructor (props) {
    super(props);
  }

  renderPeriod () {
    const period = [];
    let periodRender = null;

    this.props.what && period.push(this.props.what);
    this.props.period.from && period.push(this.props.period.from);
    this.props.period.to && period.push(this.props.period.to);

    if (period.length > 0) {
      periodRender = (
        <div className="f6 gray pa2 bb b--light-gray">
          { period.join(' - ') }
        </div>
      );
    }

    return periodRender;
  }

  renderPosition () {
    const position = [];
    let positionRender = null;

    this.props.position && position.push(this.props.position + ' at ');
    if (this.props.at) {
      const positionLink = (
        <a className="no-underline blue" href={this.props.url} target="_blank">
          { this.props.at }
        </a>
      );
      position.push(positionLink);
    }

    if (position.length > 0) {
       positionRender = (
        <div className="f5 black">
          { position }
        </div>
      );
    }

    return positionRender;
  }

  renderTopic (topic) {
    return (
      <div className="pa1 dib">
        <div className="bg-lightest-blue pa1 br1">
          { topic }
        </div>
      </div>
    );
  }

  renderTopics () {
    let topicsRender = null;

    if (this.props.topics) {
      topicsRender = (
        <div className="pv2 blue">
          { this.props.topics.map(this.renderTopic) }
        </div>
      );
    }

    return topicsRender;
  }

  renderAbout () {
    let aboutRender = null;

    if (this.props.about) {
      aboutRender = (
        <span>
          { this.props.about }
        </span>
      )
    };

    return aboutRender;
  }

  render () {
    const classes = this.props.position ? ' b--orange' : ' b--light-blue';
    return (
      <div className={ "center w-100 w-40-ns justify-center mb3 bt bw1 " + classes }>
        <div className="ph2 ba b--light-gray">
          { this.renderPeriod() }
          <div className="pv2">
            <div className="f6 gray pa2">
              { this.renderPosition() }
              { this.renderTopics() }
              { this.renderAbout() }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Job;
