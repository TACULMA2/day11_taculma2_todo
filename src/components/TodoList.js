import React from 'react';
import TodoGroup from './TodoGroup';

const TodoList = ({ lists }) => {
  return (
    <div>
      {lists.map((list, index) => {
        if (!list.id) {
          console.warn(`List at index ${index} does not have a unique "key" prop.`);
        }
        return <TodoGroup key={list.id} list={list} />;
      })}
    </div>
  );
};

export default TodoList;
