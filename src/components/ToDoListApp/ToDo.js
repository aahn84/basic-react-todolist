import React from 'react';
import '../../App.css';

const ToDo = ({ toDo, remove }) => {

  return (
    <div>
      <li
        className="todo-li"
        onClick={() => remove(toDo.id)}>
        { toDo.text }
      </li>
    </div>
  )
}

export default ToDo;
