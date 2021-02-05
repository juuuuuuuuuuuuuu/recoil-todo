import React from 'react';
import DoneList from './DoneList';
import TodoList from './TodoList';

function Todo() {
  return (
    <div className="container">
      <div className="row">
        <TodoList />
      </div>
      <div className="row">
        <DoneList />
      </div>
    </div>
  );
}
export default Todo;
