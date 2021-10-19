import './App.css';
import React from 'react'
import './lib/font-awesome/css/all.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Add from './components/Add'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
