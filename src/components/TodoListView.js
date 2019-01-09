import React, { Component } from 'react';
import withLoading from '../hoc/WithLoading';

import s from './TodoListView.module.scss';

class TodoListView extends Component {
  render() {
    const { todos, projects, project } = this.props;
    return (
      <React.Fragment>
        <h1 className={s.project}>{project.title}</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className={s.list}>
              <table className={s.listItem}>
                <tbody>
                  <tr>
                    <td className={s.checkBox}>
                      <input type="checkbox" value={todo.complete} />
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
