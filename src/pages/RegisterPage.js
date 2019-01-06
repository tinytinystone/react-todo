import React, { Component } from 'react';
import api from '../api';

export default class RegisterPage extends Component {
  onRegister = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const token = await api.post('auth/register', {
      email,
      password,
    });
  };
  render() {
    return (
      <React.Fragment>
        <h2>회원가입</h2>
        <form onSubmit={e => this.onRegister(e)}>
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" />
          <button>회원가입</button>
        </form>
      </React.Fragment>
    );
  }
}
