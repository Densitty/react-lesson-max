import React, { Component } from 'react';
import Child from './Child'
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  // or instead of using the contructor above, we can do below;
  // state = {show: true}

  delHeader = () => {
    this.setState({ show: !this.state.show });
  }


  render() {
    let myheader;

    if (this.state.show) {
      myheader = <Child />;
    };

    return (
      <div className={classes.App}>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;