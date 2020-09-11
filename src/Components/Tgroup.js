import React, { Component } from 'react';

// Transitions group is used to render list
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './../Styles/App.css';

class Slide extends Component {
  state = {
    items: []
  }

  addElements() {
    return this.state.items.map((item, i) => (
      <CSSTransition
        classNames='item'
        timeout={5000}
        key={i}
        onEntered={node => {
          node.classList.add('active')
        }}
      >
        <div className="item" key={i}>{item}</div>
      </CSSTransition>
    ));
  }

  generateNumber() {
    //let random = Math.floor(Math.random() * 100) + 1;
    let newArray = [...this.state.items, Math.floor(Math.random() * 100) + 1]
    // console.log(newArray)
    this.setState({
      items: newArray
    })
  }

  removeNumber() {
    // let arr = ['a','b','c','d','e']
    // let arr2 = arr.slice() - shallow copies the array 'arr' and saves it into another variable
    // let arr3 = arr.slice(0,-1) - removes last element and copies the rest
    let newArray = this.state.items.slice(0, -1);
    this.setState({
      items: newArray
    })
  }

  render() {
    return (
      <div>
        <TransitionGroup
          component='div'
          className='list'
        >
          {this.addElements()}
        </TransitionGroup>

        <div className="btns">
          <div className="btn-add" onClick={() => this.generateNumber()}>Add Elements</div>
          <div className="btn-remove" onClick={() => this.removeNumber()}>Remove Elements</div>
        </div>
      </div>
    )
  }



}


export default Slide;