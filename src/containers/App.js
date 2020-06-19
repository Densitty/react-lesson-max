import React, { useState, useEffect } from 'react';
// import classes from '*.module.css';
import classes from './App.module.css';

const App = props => {
  const [buttonState, setButtonState] = useState('')
  const [nameState, setNameState] = useState('John')

  useEffect(() => {
    console.log('UseEffect in action ', buttonState)
  })

  useEffect(() => {
    setTimeout(() => {
      setNameState('John Doe')
      console.log('Calling useEffect again ...', nameState)
    }, 5000)
  })

  // const componentDidMount = () => {
  //   setButtonState('Yes')
  //   console.log("Component did mount", setButtonState)
  // }

  // const componentDidUpdate = () => {
  //   console.log("Component did update", this.state.buttonPressed)
  // }

  const onYesPress = () => {
    setButtonState('Yes, John Doe will vote');
    console.log('Yes button pressed')
  }

  const onNoPress = () => {
    // setButtonState('No');
    console.log('No, John Doe won\'t vote')
  }


  return (
    < div className={classes.App} >
      <h2>Will you vote for me, {nameState}?</h2>
      <button onClick={() => onYesPress()}>
        Yes
      </button>
      <button onClick={() => onNoPress()}>No</button>
    </div >
  );

}

export default App;