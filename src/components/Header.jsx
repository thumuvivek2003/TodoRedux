import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const todos = useSelector((state) => state.todos);
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const remainingCount = totalCount - completedCount;

  return (
    <header className="header">
      <h1 style={{color:'white'}}>Todo List</h1>
      <div className="badges">
        <div className="badge total">
          <span>Total Todos:</span> {totalCount}
        </div>
        <div className="badge completed">
          <span>Completed:</span> {completedCount}
        </div>
        <div className="badge remaining">
          <span>Remaining:</span> {remainingCount}
        </div>
      </div>
    </header>
  );
};

export default Header;
