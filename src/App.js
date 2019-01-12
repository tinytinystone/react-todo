import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

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
  faCog,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectProvider } from './contexts/ProjectContext';

library.add(faCalendar, faTag, faClock, faFlag, faComment, faCog, faBell);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <ProjectProvider>
            <Switch>
              <Route path="/login" component={LoginFormPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/app/projects/:projectId" component={TodoListPage} />
              <Route
                exact
                path="/"
                render={() =>
                  localStorage.getItem('token') ? (
                    <Redirect to="/app" />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            </Switch>
          </ProjectProvider>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
