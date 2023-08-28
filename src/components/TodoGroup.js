import React from 'react';
import TodoItem from './TodoItem';
import '../style.css'

const TodoGroup = ({ list }) => {
  return (
    <div className='todo-box'>
      <h2>{list.name}</h2>
      <ul>
        {list.items.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoGroup;
