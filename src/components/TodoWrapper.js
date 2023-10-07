import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    }]);
    console.log(todos);
  };
  return (
    <div>
      <h1>Todos</h1>
      <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
      </div>

    </div>
  );
};
export default TodoWrapper;
