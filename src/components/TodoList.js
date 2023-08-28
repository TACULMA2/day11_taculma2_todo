import React from 'react';
import TodoGroup from './TodoGroup';

const TodoList = ({ lists }) => {
  return (
    <div>
      {lists.map((list) => (
        <TodoGroup key={list.id} list={list} />
      ))}
    </div>
  );
};

export default TodoList;
