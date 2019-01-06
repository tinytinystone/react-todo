import React, { Component } from 'react';
import classNames from 'classnames';
import s from './Nav.module.scss';
import api from '../api';
import ProjectForm from './ProjectForm';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      showProjectForm: false,
    };
  }
  async componentDidMount() {
    const { data: projects } = await api.get('projects');
    this.setState({
      projects: projects.slice(),
    });
  }
  addProject = () => {
    this.setState(prevState => ({
      showProjectForm: !prevState.showProjectForm,
    }));
  };
  render() {
    return (
      <nav className={s.nav}>
        <ul>
          <li>관리함</li>
          <li>오늘</li>
          <li>다음 7일</li>
        </ul>
        <div>
          <span>프로젝트</span>
          <button onClick={this.addProject}>+</button>
          {this.state.showProjectForm && <ProjectForm />}
          <ul>
            {this.state.projects.map(p => (
              <Link to={'/projects/' + p.id}>
                <li key={p.id}>{p.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>라벨</div>
        <div>필터</div>
      </nav>
    );
  }
}
