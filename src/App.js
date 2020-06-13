import React, { Component } from 'react';
import './App.css';
import Input from './Person/UserInput'
import Validation from './Person/ValidationComp'
import Char from './Person/CharComp'

class App extends Component {
  state = {
    input: ''
  }

  displayCharacterHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  removeCharHandler = (xterID) => {
    const text = this.state.input.split('')
    text.splice(xterID, 1)
    const textUpdate = text.join('')
    this.setState({
      input: textUpdate
    })
  }

  render() {
    // split the string into an array
    const letters = this.state.input.split('')
    // console.log(letters)
    const messg = letters.map((xter, index) => {
      return <Char
        key={index}
        text={xter}
        click={() => this.removeCharHandler(index)}
      />
    })
    return (
      <div>
        <Input
          change={this.displayCharacterHandler}
          placeholder='Username'
          textInput={this.state.input}
        />
        <p>{this.state.input}</p>
        <Validation
          text={this.state.input}
        />
        {messg}

      </div>
    )
  }
}

export default App;
