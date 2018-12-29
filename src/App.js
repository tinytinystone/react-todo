import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginFormPage from './pages/LoginFormPage';
import TodoListPage from './pages/TodoListPage';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faTag,
  faClock,
  faFlag,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCalendar, faTag, faClock, faFlag, faComment);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginFormPage} />
          <Route exact path="/todos" component={TodoListPage} />
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('token') ? (
                <Redirect to="/todos" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
