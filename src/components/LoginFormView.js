import React, { Component } from 'react';

export default class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    await this.props.onLogin(username, password);
  }
  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor="username">ID</label>
        <input type="text" name="username" />
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" />
        <button>로그인</button>
      </form>
    );
  }
}
