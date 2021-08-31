import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layer from "./components/layer/Layer";
import NotFoundPage from "./components/Notfound";
import About from "./pages/About";
import Main from "./pages/Main";

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
        <Route path="/projects"></Route>
        <Route path="/contact"></Route>
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
