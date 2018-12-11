import React, { Component } from 'react';
import TodoList from './components/todolist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
