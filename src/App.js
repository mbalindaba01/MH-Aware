import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { HealthTips } from './HealthTips';
import { PersonalDev } from './PersonalDev';
import { Wellness } from './Wellness';
import { NoMatch } from './NoMatch';
import { Navigation } from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/tips" component={HealthTips} />
              <Route path="/dev" component={PersonalDev} />
              <Route path="/resource" component={Wellness} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;