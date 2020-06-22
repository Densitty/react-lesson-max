import React, { Component } from 'react';
import Child from './Child'
// import classes from './App.module.css';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'Parent telling child \'Hellooo!\'',
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log('parent rendered');
    return (
      <main>
        {this.state.counter}
        <br />
        <Child message={this.state.message} />
        <button type='button' onClick={this.handleClick}>Increment</button>
      </main>
    );
  }
}


/**
 * import React, { useState, useEffect } from 'react';
import Child from './Child'
import classes from './App.module.css';

const App = (props) => {
  const [showState, setshowState] = useState(true)

  // to mimic the componentWillUnmount() method in a class-based component lifecycle, we just add the return keyword and then pass a second argument, an empty array, to useEffect()

  useEffect(() => {
    return (() => {
      console.log('Component has been taken away from the DOM')
    })
  }, [])
  console.log(showState)

  const delHeader = () => {
    setshowState(!showState);
  }


  let myheader;

  if (showState) {
    myheader = <Child />;
  };

  return (
    <div className={classes.App}>
      {myheader}
      <button type="button" onClick={() => delHeader()}>Delete Header</button>
    </div>
  );

}

export default App;
 */