import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Uncontrolled from './Components/Uncontrolled';
import Controlled from './Components/Controlled';
import User from './Components/User';


const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/uncontrolled" exact component={Uncontrolled} />
        <Route path="/controlled" exact component={Controlled} />
        <Route path="/user" exact component={User} />
      </Switch>
    </div>
  )
}

export default Routes