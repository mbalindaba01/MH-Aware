import React from 'react';
import Organise from './Organise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Diary } from './Diary';
import { Organisers } from './Organisers';





export const PersonalDev = () => (
    <React.Fragment>
        <Organisers />
        <Router>
            <Switch>
                <Route exact path="/" component={PersonalDev} />
                <Route path="./Organise" component={Organise} />
                <Route path="./diary" component={Organise} />
            </Switch>
        </Router>
      </React.Fragment>
)