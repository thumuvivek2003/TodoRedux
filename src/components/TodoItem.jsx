import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <span 
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
