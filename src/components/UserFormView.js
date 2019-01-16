import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import s from './UserFormView.module.scss';

export default class UserFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
  }
  handleSubmit = async (e, func) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      await func(email, password);
      this.setState({ success: true });
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해 보세요.');
    }
  };
  render() {
    const { success } = this.state;
    if (success) {
      alert('성공!');
      return <Redirect to="/app" />;
    }
    return (
      <div className={s.wrapper}>
        <div className={s.loginBox}>
          <h2>{this.props.buttonState}</h2>
          <form onSubmit={e => this.handleSubmit(e, this.props.func)}>
            <label htmlFor="emailForLogin" className={s.hidden}>
              EMAIL
            </label>
            <input
              type="text"
              id="emailForLogin"
              name="email"
              placeholder="이메일"
              className={s.input}
            />
            <label htmlFor="passwordForLogin" className={s.hidden}>
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordForLogin"
              name="password"
              placeholder="패스워드"
              className={s.input}
            />
            <button className={s.loginButton}>{this.props.buttonState}</button>
          </form>
          <div className={s.help}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
