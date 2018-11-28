import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" />
          <select name="category" defaultValue="카테고리">
            <option value="카테고리" disabled>
              카테고리 선택
            </option>
            <option value="공부">공부</option>
            <option value="집안일">집안일</option>
            <option value="쇼핑">쇼핑</option>
          </select>
          <button>전송</button>
        </form>
      </React.Fragment>
    );
  }
}
