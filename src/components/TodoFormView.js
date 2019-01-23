import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjectId: props.currentProjectId,
      currentTodoTitle: '',
    };
  }
  handleProjectChange = e => {
    const selectedProjectId = e.target.value;
    this.setState({
      selectedProjectId,
    });
  };
  handleSubmitTodo = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    this.props.handleTodo(this.state.selectedProjectId, title);
  };
  render() {
    const { projects } = this.props;
    return (
      <form onSubmit={this.handleSubmitTodo}>
        <div>
          <input type="text" name="title" />
          <select
            name="project"
            value={this.state.selectedProjectId}
            onChange={this.handleProjectChange}
          >
            {projects.map(p => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
          <input type="text" name="due-date" defaultValue="12월29일" />
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
    );
  }
}

export default TodoFormView;
