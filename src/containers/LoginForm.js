import React, { Component } from 'react';
import LoginFormView from '../components/LoginFormView';
import api from '../api.js';

export default class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: '',
    // };
    this.onLogin = this.onLogin.bind(this);
  }
  async onLogin(username, password) {
    const res = await api.post('/users/login/', { username, password });
    localStorage.setItem('token', res.data.token);
  }
  render() {
    // const { username, password } = this.state;
    return (
      <React.Fragment>
        <LoginFormView onLogin={this.onLogin} />
      </React.Fragment>
    );
  }
}
