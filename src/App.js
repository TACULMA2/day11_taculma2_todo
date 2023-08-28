import React, { useState } from 'react';
import TodoGenerator from './components/TodoGenerator';
import TodoList from './components/TodoList';
import './style.css';

const App = () => {
  const [todoLists, setTodoGroups] = useState([]);

  const handleAddList = (listName) => {
    const newList = { name: listName, items: [], };
    setTodoGroups([...todoLists, newList]);
  };

  return (
    <div className="App">
      <div className='app-container'>
        <div className='todo-list-box'>
      <h1>Todo List</h1>
      </div>
      <div className='todo-group-box'>
      <TodoList lists={todoLists} />
      </div>
      <TodoGenerator onAddList={handleAddList} />
      </div>
    </div>
  );
};

export default App;
