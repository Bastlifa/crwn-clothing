import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage'

const HatsPage = _ => (
  <div>
    <h1>Hats Page</h1>
  </div>
)



function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
