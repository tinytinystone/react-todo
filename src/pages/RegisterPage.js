import React, { Component } from 'react';
import Layout from '../components/Layout';
import Register from '../containers/Register';

export default class RegisterPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Register />
        </Layout>
      </React.Fragment>
    );
  }
}
