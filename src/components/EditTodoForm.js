import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};
export default EditTodoForm;
