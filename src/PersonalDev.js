import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FooterPage } from './components/FooterPage.js';
import styled from 'styled-components';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import { HashRouter, Link } from 'react-router-dom';
import Organise from './Organise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Diary } from './Diary';
import { Organisers } from './Organisers';
import { Navigation } from './components/Navigation';





export const PersonalDev = () => (
    <React.Fragment>
        <Organisers />
        <Router>
            <Switch>
                <Route exact path="/" component={PersonalDev} />
                <Route path="./Organise" component={Organise} />
                <Route path="/diary" component={Diary} />
            </Switch>
        </Router>
      </React.Fragment>
)