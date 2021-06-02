import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import loadable from "@loadable/component";
import "./App.scss";
import Landing from './pages/Landing';

const Editor = loadable(() => import("./pages/Editor"));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="app">
          <div className="main">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/editor" component={Editor} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
