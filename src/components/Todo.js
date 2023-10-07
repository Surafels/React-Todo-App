import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task}) => (
  <div className='list-tasks'>
    <p>{task.task}</p>
    <div>
      <FontAwesomeIcon icon={faPenSquare} />
      <FontAwesomeIcon icon={faTrash} />

    </div>
  </div>
);

export default Todo;
