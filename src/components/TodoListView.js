import React, { Component } from 'react';
import withLoading from '../hoc/WithLoading';

import s from './TodoListView.module.scss';

class TodoListView extends Component {
  handleComplete = (e, todoId) => {
    e.preventDefault();
    this.props.completeTodo(todoId);
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
          {incompleteTodos.map(todo => (
            <li key={todo.id} className={s.list}>
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
                      <span className={s.title}>{todo.title}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default withLoading(TodoListView);
