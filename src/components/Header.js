import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import s from './Header.module.scss';
import ModalTodoForm from './ModalTodoForm';
import Nav from './Nav';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
      showForm: false,
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn,
    }));
  };
  addTodo = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };
  render() {
    const toggleClass = classNames(
      { [s.menuToggle]: !this.state.toggleOn },
      { [s.menuClose]: this.state.toggleOn }
    );
    return (
      <React.Fragment>
        <header className={s.header}>
          <button
            className={toggleClass}
            onClick={() => {
              this.setState(prevState => ({
                toggleOn: !prevState.toggleOn,
              }));
            }}
          />
          <ul className={s.itemList}>
            <li key={1} className={s.item} onClick={this.addTodo}>
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
          {this.state.showForm && <ModalTodoForm addTodo={this.addTodo} />}
        </header>
        {this.state.toggleOn && <Nav />}
      </React.Fragment>
    );
  }
}
