import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import s from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={s.header}>
          <button>NAV</button>
          <ul className={s.itemList}>
            <li key={1} className={s.item}>
              빠른 추가
            </li>
            <li key={2} className={s.item}>
              <Link to="/login">로그인</Link>
            </li>
            <li key={3} className={s.item}>
              <Link to="/todos">관리함</Link>
            </li>
            <li key={4} className={s.item}>
              알림
            </li>
            <li key={5} className={s.item}>
              설정
            </li>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}
