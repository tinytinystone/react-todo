import React, { Component } from 'react';
import Header from './Header';
import s from './Layout.module.scss';
import Nav from './Nav';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>헤더</Header>
        <Nav>좌측 네비게이션</Nav>
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
