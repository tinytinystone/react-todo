import React, { Component } from 'react';

export default class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    await this.props.onLogin(email, password);
  }
  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor="email">EMAIL</label>
        <input type="text" name="email" />
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" />
        <button>로그인</button>
      </form>
    );
  }
}
