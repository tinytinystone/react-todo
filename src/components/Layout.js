import React, { Component } from 'react';
import Header from './Header';
import s from './Layout.module.scss';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>헤더</Header>
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
