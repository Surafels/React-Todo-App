import React, { useState } from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      return (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
   
    
        <button onClick={handleEditing}>Edit</button>
        <input  type="text"
      value={itemProp.title}
      className="textInput"
        />

    <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}

  </li>
      )
};

export default TodoItem;
