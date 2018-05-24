import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Policy from './components/Policy/Policy';
import Aadhar from './components/Aadhar/Aadhar';
import Passport from './components/Passport/Passport';
import Pan from './components/Pan/Pan';


ReactDOM.render(
  (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Policy} />
          <Route exact path="/aadhar" component={Aadhar} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/pan" component={Pan} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  ), document.getElementById('app'),
);
