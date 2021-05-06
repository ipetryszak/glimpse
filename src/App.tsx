import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from "./pages/home";
import Header from "./components/header";

export default function App() {
  return (
      <>
        <Router basename='/glimpse'>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
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
      </>
  );
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
