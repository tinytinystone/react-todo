import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import s from './Header.module.scss';
import ModalTodoForm from './ModalTodoForm';
import Nav from './Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
      showForm: false,
    };
  }
  addTodo = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };
  render() {
    const toggleClass = classNames(
      s.menubar,
      { [s.menuToggle]: !this.state.toggleOn },
      { [s.menuClose]: this.state.toggleOn }
    );
    return (
      <React.Fragment>
        <header className={s.header}>
          <div
            className={toggleClass}
            onClick={() => {
              this.setState(prevState => ({
                toggleOn: !prevState.toggleOn,
              }));
            }}
          />
          <input type="text" placeholder="빠른검색" className={s.quickFind} />
          <ul className={s.itemList}>
            <li key={1} className={s.item} onClick={this.addTodo}>
              +
            </li>
            <li key={2} className={s.item}>
              <Link to="/login">login</Link>
            </li>
            <li key={3} className={s.item}>
              <Link to="/register">가입</Link>
            </li>
            <li key={4} className={s.item}>
              <FontAwesomeIcon icon="bell" />
            </li>
            <li key={5} className={s.item}>
              <FontAwesomeIcon icon="cog" />
            </li>
          </ul>
          {this.state.showForm && <ModalTodoForm addTodo={this.addTodo} />}
        </header>
        {this.state.toggleOn && <Nav />}
      </React.Fragment>
    );
  }
}
