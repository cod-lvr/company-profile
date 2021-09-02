import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layer from "./components/layer/Layer";
import NotFoundPage from "./components/Notfound";
import About from "./pages/About";
import Main from "./pages/Main";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Layer>
      <Switch>
        <Route path="/home" exact>
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layer>
  );
}

export default App;
