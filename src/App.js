import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import Header from './components/Header/Header'

const HatsPage = _ => (
  <div>
    <h1>Hats Page</h1>
  </div>
)



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
