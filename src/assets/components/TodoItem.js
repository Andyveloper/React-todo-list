import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => console.log('Clicked')} />{props.todo.title}
    </li>
  )
}


export default TodoItem;
