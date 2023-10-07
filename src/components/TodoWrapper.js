import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const addTodo = (todo) => {
    if (todo.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          task: todo,
          completed: false,
          isEditing: false,
        },
      ]);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id
        ? { ...todo, task: updatedTask, isEditing: false } : todo)),
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)),
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Todos</h1>
      <div>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            editTodo={editTodo}
            task={todo}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            toggleEdit={toggleEdit}
          />
        )))}
        {showWarning && <p style={{ color: 'red' }}>Please add a task</p>}

      </div>
    </div>
  );
};

export default TodoWrapper;
