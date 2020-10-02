import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "@/views/Home";
import About from "@/views/About";
import "./styles/index.css";

const histoty = createBrowserHistory();

const App = (
  <Router history={histoty}>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="*" component={Home}></Route>
  </Router>
);

export default App;
