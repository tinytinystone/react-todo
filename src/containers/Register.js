import React, { Component } from 'react';

export default class Register extends Component {
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
