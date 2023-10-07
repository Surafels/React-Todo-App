import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditTodoForm = ({ editTodo, task: initialTask }) => {
  const [task, setTask] = useState(initialTask.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(initialTask.id, task);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EditTodoForm;
