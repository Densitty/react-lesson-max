import React, { Component } from 'react';
// import BlogInformation from './Child'
// import withColor from './withColor'
// import classes from './App.module.css';


class App extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef()
    this.state = { sayings: "" };
  }
  update(e) {
    this.setState({ sayings: this.inputElementRef.current.value });
    console.log(this.inputElementRef)
  }
  render() {
    return (
      <div>
        Reporter: <input type="text" ref={this.inputElementRef} onChange={() => this.update()} />
        <br />
        <em>John says "{this.state.sayings}"</em>
      </div>
    );
  }
}

export default App

/** Coming to this later */
// import React, { useState, useRef } from 'react';


// const App = props => {
//   const inputElementRef = useRef("")
//   const [showSayingState, setSayingState] = useState('')


//   const update = () => {
//     setSayingState({
//       sayings: inputElementRef.value
//     });
//     return inputElementRef.current.value
//   }

//   return (
//     <div>
//       Reporter: <input type="text" ref={inputElementRef} onChange={() => update()} />
//       <br />
//       <em>John says "{inputElementRef.current.value}"</em>
//     </div>
//   );

// }

// export default App