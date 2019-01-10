import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import api from '../api';

const { Provider, Consumer } = React.createContext();

class ProjectProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      addProject: this.addProject,
    };
  }
  async componentDidMount() {
    this.refreshPage();
  }
  addProject = async title => {
    await api.post('/projects', { title });
    this.refreshPage();
  };
  refreshPage = async () => {
    const { data: projects } = await api.get('projects');
    this.setState({ projects });
  };
  render() {
    const projectWelcome = this.state.projects.find(
      p => p.title === '환영합니다👋'
    );
    return (
      <React.Fragment>
        {projectWelcome && (
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('token') ? (
                <Redirect to={`/projects/${projectWelcome.id}`} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        )}
        <Provider value={this.state}>{this.props.children}</Provider>
      </React.Fragment>
    );
  }
}

function withProject(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { ProjectProvider, Consumer as ProjectConsumer, withProject };
