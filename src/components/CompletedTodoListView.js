import React, { Component } from 'react';
import withLoading from '../hoc/WithLoading';

import s from './CompletedTodoListView.module.scss';

class CompletedTodoListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompletedTodos: false,
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      showCompletedTodos: !prevState.showCompletedTodos,
    }));
  };
  render() {
    const { completedTodos } = this.props;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>완료된 작업 표시</button>
        {this.state.showCompletedTodos && (
          <ul>
            {completedTodos.map(todo => (
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
        )}
      </React.Fragment>
    );
  }
}

export default withLoading(CompletedTodoListView);
