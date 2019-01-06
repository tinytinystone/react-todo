import React, { Component } from 'react';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedProjectId: 0,
    };
  }
  async componentDidMount() {
    const { data: projects } = await api.get('/projects');
    this.setState({
      projects: projects.slice(),
    });
  }
  handleChange = async e => {
    const selectedProjectId = e.target.value;
    this.setState({
      selectedProjectId,
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const body = e.target.elements.body.value;
    await api.post(`/projects/${this.state.selectedProjectId}/todos`, {
      title: body,
    });
  };
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <input type="text" name="body" />
          <select
            name="project"
            value={this.state.selectedProjectId}
            onChange={this.handleChange}
          >
            {this.state.projects.map(p => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
          <input type="text" name="due-date" value="12월29일" />
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
