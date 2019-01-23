import React, { Component } from 'react';
import TodoListView from '../components/TodoListView';

import { withProject } from '../contexts/ProjectContext';
import { withTodo } from '../contexts/TodoContext';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showCompletedTodos: false,
    };
  }
  componentDidMount = async () => {
    await this.props.refreshTodoList();
    this.setState({
      loading: false,
    });
  };
  handleShowCompletedTodosClick = () => {
    this.setState(prevState => ({
      showCompletedTodos: !prevState.showCompletedTodos,
    }));
  };
  render() {
    const { todos, projects, currentProjectId } = this.props;
    const { loading } = this.state;
    const incompleteTodos = todos.filter(t => t.complete === false);
    const completedTodos = todos.filter(t => t.complete === true);
    const project = projects.find(
      p => parseInt(p.id) === parseInt(currentProjectId)
    );
    return (
      <React.Fragment>
        {project && <h1>{project.title}</h1>}
        <TodoListView
          currentTodos={incompleteTodos}
          projects={projects}
          loading={loading}
          {...this.props}
        />
        <button onClick={this.handleShowCompletedTodosClick}>
          완료된 작업 표시
        </button>
        {this.state.showCompletedTodos && (
          <TodoListView
            currentTodos={completedTodos}
            loading={loading}
            {...this.props}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTodo(withProject(TodoList));
