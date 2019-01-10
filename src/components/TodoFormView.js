import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withRouter from 'react-router/withRouter';

class TodoFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjectId: 0,
    };
  }
  // FIXME: 왜 value 값이 선택되지 않을까?
  componentDidMount() {
    const { currentProjectId } = this.props;
    this.setState({
      selectedProjectId: currentProjectId,
    });
  }
  handleChange = e => {
    const selectedProjectId = e.target.value;
    this.setState({
      selectedProjectId,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    this.props.submitTodo(this.state.selectedProjectId, title);
  };
  render() {
    const { projects } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="title" />
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

export default withRouter(TodoFormView);
