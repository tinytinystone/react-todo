import React, { Component } from 'react';

import ProjectForm from './ProjectForm';
import { Link } from 'react-router-dom';
import { withProject } from '../contexts/ProjectContext';

import s from './Nav.module.scss';
import ProjectMenuList from './ProjectMenuList';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjectForm: false,
      showProjectMenuList: false,
    };
  }
  render() {
    const { projects, addProject, editProject } = this.props;
    return (
      <nav className={s.nav}>
        <ul className={s.topFilters}>
          <li>관리함</li>
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
                <li key={p.id}>
                  <Link to={'/app/projects/' + p.id} key={p.id}>
                    <span className={s.name}>{p.title}</span>
                    <span className={s.projectCount}>10</span>
                  </Link>
                  <span
                    className={s.projectMenu}
                    onClick={() => {
                      this.setState(prevState => ({
                        showProjectMenuList: !prevState.showProjectMenuList,
                        clickedProjectId: p.id,
                      }));
                    }}
                  >
                    ...
                  </span>
                </li>
              ))}
              {this.state.showProjectMenuList && (
                <ProjectMenuList
                  currentProjectId={this.state.clickedProjectId}
                />
              )}
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
