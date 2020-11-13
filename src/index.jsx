import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import '@/scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
