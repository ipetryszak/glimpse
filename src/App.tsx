import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

export default function App() {
  return (
      <Router basename='/glimpse'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/watch/:id">
            <Watch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Watch() {
  return <h2>Watch</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}
