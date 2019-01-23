import React, { Component } from 'react';
import Header from './Header';
import { withRouter } from 'react-router';

import s from './Layout.module.scss';

class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <Header
          key={location.pathname}
          handleQuickTaskClick={this.props.handleQuickTaskClick}
        />
        <main className={s.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
