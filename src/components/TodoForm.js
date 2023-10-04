import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
e.preventDefault();
addTodo(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="What is the task tody?" 
      onChange={(e)=> setValue(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TodoForm;
