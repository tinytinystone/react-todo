import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginFormPage from './pages/LoginFormPage';
import TodoListPage from './pages/TodoListPage';
import RegisterPage from './pages/RegisterPage';

import s from './App.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
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
          <Route path="/register" component={RegisterPage} />
          <Route path="/todos" component={TodoListPage} />
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('token') ? (
                <Redirect to="/" />
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
