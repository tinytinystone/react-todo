import React, { Component } from 'react';
import classNames from 'classnames';
import s from './Nav.module.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    const navClass = classNames(s.nav, {
      [s.show]: this.state.show,
    });
    return (
      <nav className={navClass}>
        <ul>
          <li>관리함</li>
          <li>오늘</li>
          <li>다음 7일</li>
        </ul>
        <div>프로젝트</div>
        <div>라벨</div>
        <div>필터</div>
      </nav>
    );
  }
}
