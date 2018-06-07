import React from 'react';
import '../../App.css';
import ToDo from './ToDo';

const ToDoList = ({ toDos, remove }) => {

  const toDoNode = toDos.map((toDo) => {
    return (
      <ToDo
        toDo={ toDo }
        key={ toDo.id }
        remove={ remove }
      />
    )
  })

  return (
    <div>
      <ul>
        { toDoNode }
      </ul>
    </div>
  )
}

export default ToDoList;
