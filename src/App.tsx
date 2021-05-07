import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from "./pages/home";
import Header from "./components/header";
import Search from "./pages/search";

export default function App() {
  return (
      <>
        <Router basename='/glimpse'>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search}/>
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


function Watch() {
  return <h2>Watch</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}
