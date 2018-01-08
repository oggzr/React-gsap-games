import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../home/home';
import Balls from '../games/Balls';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Balls}/>
      <Route path="/games/balls" component={Balls} />
    </Switch>

  </main>
);

export default Main;
