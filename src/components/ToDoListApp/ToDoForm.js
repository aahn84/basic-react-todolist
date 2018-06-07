import React from 'react';
import '../../App.css';

const ToDoForm = ({ addToDo }) => {
  let input;

  return (
    <div className="add-item-div">
      Add Item:
      <br/>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        addToDo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  )
}

export default ToDoForm;
