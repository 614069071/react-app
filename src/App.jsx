import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import "./css/index.css";

const App = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="*" component={Home}></Route>
    </Switch>
  </HashRouter>
);

export default App;
