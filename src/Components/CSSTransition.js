import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

import './../Styles/App.css';

class CSStransition extends Component {

  state = {
    show: false
  }

  showDiv = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.show}
          timeout={5000}
          classNames='square'
        >
          <div className={`square ${this.state.show}`}>
            Hello
          </div>
        </CSSTransition>
        <div
          className="showDiv"
          onClick={this.showDiv}
        >
          Show or Hide
        </div>
      </div>
    )
  }
}


export default CSStransition;