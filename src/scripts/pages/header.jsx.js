import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className="pa4 center w-100 justify-center">
        <div className="f4 tc pv1">Gustavo Vargas Baladão</div>
        <div className="gray tc pv1">Software Developer at ADP Inc.</div>
        <div className="gray tc pv1">Porto Alegre - RS, Brazil</div>
        <div className="gray tc pv1 flex-row justify-center">
          <span className="pa2 order-1 flex inline-flex-ns">
            <a className="no-underline gray" href="http://twitter.com/gustavobala" target="_blank">
              <span className="fa fa-twitter mr1"></span>
              gustavobala
            </a>
          </span>
          <span className="pa2 order-2 flex inline-flex-ns">
            <a className="no-underline gray" href="http://stackoverflow.com/story/baladao" target="_blank">
              <span className="fa fa-stack-overflow mr1"></span>
              baladao
            </a>
          </span>
          <span className="pa2 order-3 flex inline-flex-ns">
            <a className="no-underline gray" href="http://github.com/baladao" target="_blank">
              <span className="fa fa-github mr1"></span>
              baladao
            </a>
          </span>
          <span className="pa2 order-4 flex inline-flex-ns">
            <a className="no-underline gray" href="http://github.com/baladao" target="_blank">
              <span className="fa fa-google mr1"></span>
              x.baladao@gmail.com
            </a>
          </span>
        </div>
      </div>
    );
  }
};

export default Header;
