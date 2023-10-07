import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({
  task, toggleComplete, deleteTodo, toggleEdit,
}) => (
  <div className="list-tasks">
    <p
      onClick={() => toggleComplete(task.id)}
      className={task.completed ? 'completed' : ''}
    >
      {task.task}
    </p>
    <div className="icons">
      <FontAwesomeIcon icon={faPenSquare} onClick={() => toggleEdit(task.id)} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  </div>
);

export default Todo;
