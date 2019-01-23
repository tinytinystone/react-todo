import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';
import { withRouter, Route } from 'react-router-dom';
import { TodoProvider } from '../contexts/TodoContext';
import { withUser } from '../contexts/UserContext';
import { ProjectProvider } from '../contexts/ProjectContext';
import classNames from 'classnames';
import ModalTodoForm from '../components/ModalTodoForm';

class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddTask: false,
      showQuickAddTask: false,
    };
  }
  handleAddTaskClick = () => {
    this.setState(prevState => ({
      showAddTask: !prevState.showAddTask,
    }));
  };
  handleQuickTaskClick = () => {
    this.setState(prevState => ({
      showQuickAddTask: !prevState.showQuickAddTask,
    }));
  };
  render() {
    const overlayClass = classNames({
      showQuickAddTask: this.state.showQuickAddTask,
    });
    return (
      <ProjectProvider>
        <Route
          path="/app/projects/:projectId"
          render={({ match }) => {
            const projectId = match.params.projectId;
            return (
              <TodoProvider key={projectId} currentProjectId={projectId}>
                <div className={overlayClass} />
                <Layout
                  handleQuickTaskClick={this.handleQuickTaskClick}
                  showQuickAddTask={this.state.showQuickAddTask}
                >
                  <TodoList key={projectId} />
                  <button onClick={this.handleAddTaskClick}>작업 추가</button>
                  {this.state.showAddTask && <TodoForm />}
                </Layout>
                {this.state.showQuickAddTask && (
                  <ModalTodoForm
                    handleQuickTaskClick={this.handleQuickTaskClick}
                  />
                )}
              </TodoProvider>
            );
          }}
        />
      </ProjectProvider>
    );
  }
}

export default withUser(withRouter(TodoListPage));
