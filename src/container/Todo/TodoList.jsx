import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { todoListSelector } from '../../recoils/todo';

function TodoList() {
  const inputRef = useRef(null);
  const [todoData, setTodo] = useRecoilState(todoListSelector);

  const handleClick = () => {
    const value = inputRef.current.value;
    setTodo(value);
    inputRef.current.value = '';
  }

  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <input type="text" className="form-control add-todo" placeholder="Add todo" ref={inputRef} />
      <button className="btn btn-success" onClick={handleClick}>Mark all as done</button>
      <hr />
      <ul id="sortable" className="list-unstyled">
        {todoData.map((data, i)=> (
          <li className="ui-state-default" key={i}>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />{data.content}</label>
            </div>
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        <strong><span className="count-todos">{todoData.length}</span></strong> Items Left
       </div>
    </div>
  );
}
export default TodoList;
