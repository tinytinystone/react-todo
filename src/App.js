import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginFormPage from './pages/LoginFormPage';
import TodoListPage from './pages/TodoListPage';
import './App.css';

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
