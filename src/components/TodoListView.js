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
      todoIdEditing: null,
    };
  }
  componentDidMount = () => {
    const { currentTodos } = this.props;
    const currentTodo = [];
    for (let todo of currentTodos) {
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
  handleEditTodo = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    this.props.editTodo(this.state.todoIdEditing, title);
  };
  handleShowEditForm = id => {
    this.setState({
      todoIdEditing: id,
    });
  };
  render() {
    const { currentTodos, projects } = this.props;
    const { todoIdEditing } = this.state;
    return (
      <ul>
        {currentTodos.map(todo => {
          if (todo.id === todoIdEditing) {
            return (
              <div>
                <form onSubmit={this.handleEditTodo}>
                  <div>
                    <input type="text" name="title" defaultValue={todo.title} />
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
            );
          } else {
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
                        <td>
                          <span>{todo.order}</span>
                        </td>
                        <td onClick={() => this.handleShowEditForm(todo.id)}>
                          <span className={s.title}>{todo.title}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default withLoading(TodoListView);
