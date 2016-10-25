import React from 'react';
import jobs from '../jobs';
import { Job } from '../components';

class About extends React.Component {

  getJob (job) {
    return <Job { ...job }/>;
  }

  render () {
    return (
      <div className="f6">
        <div>
          <div className="pa4 center w-100 justify-center">
            <div className="f4 tc pv1">Gustavo Vargas Baladão</div>
            <div className="gray tc pv1">Software Developer at ADP Inc.</div>
            <div className="gray tc pv1">
              <span className="ph1">
                Porto Alegre - RS, Brazil
              </span>
              <span className="ph1">
                <a className="no-underline gray" href="http://twitter.com/gustavobala">
                  <span className="fa fa-twitter"></span>
                  @gustavobala
                </a>
              </span>
              <span className="ph1">
                <a className="no-underline gray" href="http://stackoverflow.com/story/baladao">
                  <span className="fa fa-circle"></span>
                  @baladao
                </a>
              </span>
              <span className="ph1">
                <a className="no-underline gray" href="http://github.com/baladao">
                  <span className="fa fa-github"></span>
                  @baladao
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-near-white">
          <div className="pa4 center w-100 w-50-ns justify-center tc">
            I pursue challenges and believe they maximize my growth. I seek on learning new technologies, sharing knowledge and practicing it in order to become a specialist in Software Development. I’m a self-taught learner, proactive, communicative and open to criticism. I’m seeking the opportunity to work outside Brazil, as a software developer with technologies such as NodeJS and ReactJS and interact with off-country professionals to discover new cultures and ways of thinking.
          </div>
        </div>
        <div className="pa4 center w-100 w-50-ns justify-center tc">
          <div className="mb2">
            I like working with
          </div>
          <div className="blue">
            <div className="bg-lightest-blue pa1 ma1 br1 dib">node.js</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">react.js</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">microservices.js</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">ddd</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">tdd</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">java</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">javascript</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">webpack</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">agile</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">scrum</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">docker</div>
            <div className="bg-lightest-blue pa1 ma1 br1 dib">es2016</div>
          </div>
        </div>
        { jobs.map(this.getJob) }
      </div>
    );
  }
};

export default About;
