import React, { Component } from 'react';
import LoginFormView from '../components/LoginFormView';
import api from '../api.js';

export default class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  async onLogin(email, password) {
    const res = await api.post('/auth/sign_in/', { email, password });
    localStorage.setItem('token', res.data);
  }
  render() {
    return (
      <React.Fragment>
        <LoginFormView onLogin={this.onLogin} />
      </React.Fragment>
    );
  }
}
