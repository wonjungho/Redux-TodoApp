import React, { Component } from 'react';

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import VisibleTodoList from './VisibleTodoList'
import ControllerButtons from './ControllerButton'


class App extends Component {
  render() {
    return (
      <div>
        <TodoInput/>
        <TodoList/>
        <ControllerButtons></ControllerButtons>
        <VisibleTodoList></VisibleTodoList>
      </div>
    )
  }
}

export default App