import React, { useState } from "react";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false)
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through"
  }
  const { completed, id, title } = props.todo;
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleUpdateDone = e => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }
  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)} />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone} />
    </li>
  )
}


export default TodoItem;
