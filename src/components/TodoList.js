import React from 'react';
import TodoGroup from './TodoGroup';

const TodoList = ({ lists }) => {
  return (
    <div>
      {lists.map((list, index) => {
        return <TodoGroup key={index} list={list} />;
      })}
    </div>
  );
};

export default TodoList;
