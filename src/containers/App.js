import React, { Component } from 'react';
import Banner from './Banner'
// import classes from './App.module.css';

class App extends Component {
  state = { buttonPressedCount: 0 };


  render() {
    const { buttonPressedCount } = this.state;

    return (
      <div className="new-component">
        <h4>Button Pressed Count: {buttonPressedCount}</h4>
        <button
          onClick={() => {
            return this.setState({ buttonPressedCount: buttonPressedCount + 1 })
          }
          }
        >
          Increase Count
        </button>
        <Banner type="info" />
      </div>
    );
  }
}

export default App;



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