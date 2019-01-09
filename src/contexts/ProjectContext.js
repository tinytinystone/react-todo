import React, { Component } from 'react';
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
    return <Provider value={this.state}>{this.props.children}</Provider>;
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
