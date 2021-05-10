import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Home from "./pages/home";
import Header from "./components/header";
import Search from "./pages/search";
import Watch from "./pages/watch";

export default function App() {
  return (
      <>
        <Router basename='/glimpse'>
          <div style={{position: "sticky", top: "0"}}>
            <Header />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search}/>
            <Route path="/watch/:id" component={Watch}/>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}
