import React, { Component } from 'react';
import withLoading from '../hoc/WithLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './TodoListView.module.scss';

class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: [],
      showEditForm: false,
    };
  }
  componentDidMount = () => {
    const { incompleteTodos } = this.props;
    const currentTodo = [];
    for (let todo of incompleteTodos) {
      currentTodo.push(todo.title);
    }
    this.setState({
      currentTodo,
    });
  };
  handleComplete = (e, todoId) => {
    e.preventDefault();
    this.props.completeTodo(todoId);
  };
  handleTodoFormInputChange = (e, index) => {
    const title = e.target.value;
    this.setState(prevState => {
      prevState.currentTodo[index] = title;
      return {
        currentTodo: prevState.currentTodo.slice(),
      };
    });
  };
  handleEditTodo = (e, todoId, index) => {
    e.preventDefault();
    this.props.editTodo(todoId, this.state.currentTodo[index]);
  };
  handleShowEditForm = () => {
    this.setState(prevState => ({
      showEditForm: !prevState.showEditForm,
    }));
  };
  render() {
    const { incompleteTodos, projects, currentProjectId } = this.props;
    const project = projects.find(
      p => parseInt(p.id) === parseInt(currentProjectId)
    );
    return (
      <React.Fragment>
        <ul>
          {project && <h1 className={s.project}>{project.title}</h1>}
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo.id}>
                <div className={s.list} onClick={this.handleEditTodo}>
                  <table className={s.listItem}>
                    <tbody>
                      <tr>
                        <td className={s.checkBox}>
                          <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={e => this.handleComplete(e, todo.id)}
                          />
                        </td>
                        <td onClick={this.handleShowEditForm}>
                          <span className={s.title}>{todo.title}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {this.state.showEditForm && (
                  <div>
                    <form
                      onSubmit={e => this.handleEditTodo(e, todo.id, index)}
                    >
                      <div>
                        <input
                          type="text"
                          name="title"
                          value={this.state.currentTodo[index]}
                          onChange={e =>
                            this.handleTodoFormInputChange(e, index)
                          }
                        />
                        <select
                          name="project"
                          value={this.state.selectedProjectId}
                          onChange={this.handleChange}
                        >
                          {projects.map(p => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          name="due-date"
                          defaultValue="12월29일"
                        />
                      </div>
                      <button>전송</button>
                      <div>
                        <span>
                          <FontAwesomeIcon icon="calendar" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon="tag" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon="clock" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon="flag" />
                        </span>
                        <span>
                          <FontAwesomeIcon icon="comment" />
                        </span>
                      </div>
                    </form>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default withLoading(TodoListView);
