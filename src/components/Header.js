import React, { Component } from 'react';
// import classNames from 'classnames';
import s from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={s.header}>
          <ul className={s.itemList}>
            <li key={1} className={s.item}>
              빠른 추가
            </li>
            <li key={2} className={s.item}>
              로그인
            </li>
            <li key={3} className={s.item}>
              관리함
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
