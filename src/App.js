import React, { Component, StrictMode } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./configs/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <StrictMode>
          <div hidden> learn react</div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                render={(props) => (
                  // <route.component {...props} {...route.props} />
                  <route.component />
                )}
              />
            ))}
          </Switch>
        </StrictMode>
      </Router>
    );
  }
}

export default App;
