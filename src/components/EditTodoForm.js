import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(task.id, value);
    setValue('');
    task.isEditing = false; // Toggle off the editing mode
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditTodoForm;
