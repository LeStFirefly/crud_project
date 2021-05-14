import React, { Component } from 'react';
import TableBlock from '../TableBlock';
import PutNewItem from '../PutNewItem';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Users</h1>
        <TableBlock/>
        <PutNewItem/>
      </div>
    );
  }
}
