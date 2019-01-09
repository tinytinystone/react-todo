import React, { Component } from 'react';
import s from './Nav.module.scss';
import api from '../api';
import ProjectForm from './ProjectForm';
import { Link } from 'react-router-dom';
import { withProject } from '../contexts/ProjectContext';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjectForm: false,
    };
  }
  render() {
    const { projects, addProject } = this.props;
    return (
      <nav className={s.nav}>
        <ul className={s.topFilters}>
          <Link to={'/projects/' + 1}>
            <li>관리함</li>
          </Link>
          <li>오늘</li>
          <li>다음 7일</li>
        </ul>
        <div className={s.panels}>
          <div className={s.project}>
            <span className={s.panelSummary}>프로젝트</span>
            {this.state.showProjectForm && (
              <ProjectForm addProject={addProject} />
            )}
            <ul>
              {projects.map(p => (
                <Link to={'/projects/' + p.id} key={p.id}>
                  <li key={p.id}>{p.title}</li>
                </Link>
              ))}
            </ul>
            <button
              onClick={() => {
                this.setState(prevState => ({
                  showProjectForm: !prevState.showProjectForm,
                }));
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={s.panels}>
          <span className={s.panelSummary}>라벨</span>
        </div>
        <div className={s.panels}>
          <span className={s.panelSummary}>필터</span>
        </div>
      </nav>
    );
  }
}

export default withProject(Nav);
