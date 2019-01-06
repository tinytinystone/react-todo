import React, { Component } from 'react';
import s from './TodoListView.module.scss';

export default class TodoListView extends Component {
  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <h1 className={s.project}>관리함</h1>
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
