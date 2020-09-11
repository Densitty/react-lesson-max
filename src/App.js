import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Styles/App.css';

// COMPONENTS
import CSStransition from './Components/CSSTransition';
import Tgroup from './Components/Tgroup';
import TransitionComp from './Components/Transition';
import User from './Components/User'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/csstransition">CSStransition</Link>
          <Link to="/tgroup">Transitions group</Link>
          <Link to="/user">User</Link>
        </div>
        <Route path="/transition" component={TransitionComp}></Route>
        <Route path="/csstransition" component={CSStransition}></Route>
        <Route path="/tgroup" component={Tgroup}></Route>
        <Route path="/user" component={User}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
