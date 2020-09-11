import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import Registry from "./routes/Registry"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route Path="/home" exact>
            <Home></Home>
          </Route>
          <Route Path="/">
            <Registry> </Registry>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
