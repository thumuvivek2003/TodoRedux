import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='myBody'>
          <Header />
          <TodoInput />
          <TodoList />
        </div>
    </div>
  );
}

export default App;
