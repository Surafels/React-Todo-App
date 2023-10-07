import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Todo = ({
  task, toggleComplete, deleteTodo, toggleEdit,
}) => (
  <div className="list-tasks">
    <div
      className={`todo${task.completed ? ' completed' : ''}`}
      onClick={() => toggleComplete(task.id)}
      onKeyDown={() => toggleComplete(task.id)}
      tabIndex={0}
      role="button"
    >
      {task.task}
    </div>
    <div className="icons">
      <FontAwesomeIcon icon={faPenSquare} onClick={() => toggleEdit(task.id)} aria-hidden="true" />
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} aria-hidden="true" />
    </div>
  </div>
);

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default Todo;
