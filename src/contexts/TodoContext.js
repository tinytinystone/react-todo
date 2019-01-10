import React, { Component } from 'react';
import api from '../api';

const { Provider, Consumer } = React.createContext();

class TodoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      refreshTodoList: this.refreshTodoList,
      completeTodo: this.completeTodo,
      addTodo: this.addTodo,
      currentProjectId: this.props.currentProjectId,
    };
  }
  componentDidMount = () => {
    this.refreshTodoList();
  };
  refreshTodoList = async () => {
    const { data: todos } = await api.get(
      '/projects/' + this.state.currentProjectId + '/todos'
    );
    this.setState({ todos });
  };
  completeTodo = async todoId => {
    await api.patch('/todos/' + todoId, {
      complete: true,
    });
    this.refreshTodoList();
  };
  addTodo = async (projectId, title) => {
    await api.post(`/projects/${projectId}/todos`, {
      title,
    });
    this.refreshTodoList();
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withTodo(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { TodoProvider, Consumer as TodoConsumer, withTodo };
